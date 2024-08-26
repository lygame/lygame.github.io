(function(root){var exports=undefined,module=undefined,require=undefined;var define=undefined;(function(){/*
 * @Description: lz4压缩
 * @Autor: qiaomingwu
 * @Date: 2022-02-08 11:52:08
 */const maxInputSize=0x7E000000;const minMatch=4;const hashLog=16;const hashShift=minMatch*8-hashLog;const hashSize=1<<hashLog;const mfLimit=8+minMatch;//copyLength + minMatch
const skipStrength=6;const mlBits=4;const mlMask=(1<<mlBits)-1;const runMask=(1<<8-mlBits)-1;//const runBits = 8 - mlBits;
const hasher=2654435761;globalThis.lz4={/**
	 * 压缩
	 * @param {*} input 
	 * @returns 
	 */compress(input){var maxSize=this._compressBound(input.length);var output=new Array(maxSize);// V8 optimization: non sparse array with integers
var hashTable=new Array(hashSize);for(var i=0;i<hashSize;i++){hashTable[i]=0;}var compressedSize=this._compressBlock(input,output,0,hashTable,0,maxSize);output=output.slice(0,compressedSize);return output;},/**
	 * 解压
	 * @param {*} input 
	 * @returns 
	 */decompress(input){var len=input.length;var maxSize=this._compressBound(len);var output=new Array(maxSize);var decompressedSize=this._decompressBlock(input,output,0,len);output=output.slice(0,decompressedSize);return output;},//===============================private=====================================
_imul(a,b){var ah=a>>>16;var al=a&0xffff;var bh=b>>>16;var bl=b&0xffff;return al*bl+(ah*bl+al*bh<<16)|0;},// CompressBound returns the maximum length of a lz4 block, given it's uncompressed length
_compressBound(n){return n>maxInputSize?0:n+n/255+16|0;},_compressBlock(src,dst,pos,hashTable,sIdx,eIdx){var dpos=sIdx;var dlen=eIdx-sIdx;var anchor=0;if(src.length>=maxInputSize)throw new Error("input too large");// Minimum of input bytes for compression (LZ4 specs)
if(src.length>mfLimit){var n=this._compressBound(src.length);if(dlen<n)throw Error("output too small: "+dlen+" < "+n);var step=1,findMatchAttempts=(1<<skipStrength)+3// Keep last few bytes incompressible (LZ4 specs):
// last 5 bytes must be literals
,srcLength=src.length-mfLimit;while(pos+minMatch<srcLength){// Find a match
// min match of 4 bytes aka sequence
var sequenceLowBits=src[pos+1]<<8|src[pos];var sequenceHighBits=src[pos+3]<<8|src[pos+2];// compute hash for the current sequence
var hash=this._imul(sequenceLowBits|sequenceHighBits<<16,hasher)>>>hashShift;// get the position of the sequence matching the hash
// NB. since 2 different sequences may have the same hash
// it is double-checked below
// do -1 to distinguish between initialized and uninitialized values
var ref=hashTable[hash]-1;// save position of current sequence in hash table
hashTable[hash]=pos+1;// first reference or within 64k limit or current sequence !== hashed one: no match
if(ref<0||pos-ref>>>16>0||(src[ref+3]<<8|src[ref+2])!=sequenceHighBits||(src[ref+1]<<8|src[ref])!=sequenceLowBits){// increase step if nothing found within limit
step=findMatchAttempts++>>skipStrength;pos+=step;continue;}findMatchAttempts=(1<<skipStrength)+3;// got a match
var literals_length=pos-anchor;var offset=pos-ref;// minMatch already verified
pos+=minMatch;ref+=minMatch;// move to the end of the match (>=minMatch)
var match_length=pos;while(pos<srcLength&&src[pos]==src[ref]){pos++;ref++;}// match length
match_length=pos-match_length;// token
var token=match_length<mlMask?match_length:mlMask;// encode literals length
if(literals_length>=runMask){// add match length to the token
dst[dpos++]=(runMask<<mlBits)+token;for(var len=literals_length-runMask;len>254;len-=255){dst[dpos++]=255;}dst[dpos++]=len;}else{// add match length to the token
dst[dpos++]=(literals_length<<mlBits)+token;}// write literals
for(var i=0;i<literals_length;i++){dst[dpos++]=src[anchor+i];}// encode offset
dst[dpos++]=offset;dst[dpos++]=offset>>8;// encode match length
if(match_length>=mlMask){match_length-=mlMask;while(match_length>=255){match_length-=255;dst[dpos++]=255;}dst[dpos++]=match_length;}anchor=pos;}}// cannot compress input
if(anchor==0)return 0;// Write last literals
// encode literals length
literals_length=src.length-anchor;if(literals_length>=runMask){// add match length to the token
dst[dpos++]=runMask<<mlBits;for(var ln=literals_length-runMask;ln>254;ln-=255){dst[dpos++]=255;}dst[dpos++]=ln;}else{// add match length to the token
dst[dpos++]=literals_length<<mlBits;}// write literals
pos=anchor;while(pos<src.length){dst[dpos++]=src[pos++];}return dpos;},_decompressBlock(input,output,sIdx,eIdx){sIdx=sIdx||0;eIdx=eIdx||input.length-sIdx;// Process each sequence in the incoming data
for(var i=sIdx,n=eIdx,j=0;i<n;){var token=input[i++];// Literals
var literals_length=token>>4;if(literals_length>0){// length of literals
var l=literals_length+240;while(l===255){l=input[i++];literals_length+=l;}// Copy the literals
var end=i+literals_length;while(i<end)output[j++]=input[i++];// End of buffer?
if(i===n)return j;}// Match copy
// 2 bytes offset (little endian)
var offset=input[i++]|input[i++]<<8;// 0 is an invalid offset value
if(offset===0||offset>j)return-(i-2);// length of match copy
var match_length=token&0xf;var l=match_length+240;while(l===255){l=input[i++];match_length+=l;}// Copy the match
var pos=j-offset;// position of the match copy in the current output
var end=j+match_length+4;// minmatch = 4
while(j<end)output[j++]=output[pos++];}return j;}};}).call(root);})(// The environment-specific global.
function(){if(typeof globalThis!=='undefined')return globalThis;if(typeof self!=='undefined')return self;if(typeof window!=='undefined')return window;if(typeof global!=='undefined')return global;if(typeof this!=='undefined')return this;return{};}.call(this));