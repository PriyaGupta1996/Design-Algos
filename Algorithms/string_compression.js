const stringCompress =(original)=>{
const value=original.toLowerCase();
if(value.length<=1) return value;
let result =[]
let count=1;
for(let i=1;i<value.length;i++){
    if(value[i]==value[i-1]) count++;
    else{
        result.push(value[i-1]);
        result.push(count);
        count=1;
    }    
}
result.push(original[original.length - 1], count);
if(result.join('').length>original.length) return original;
return result.join('')

}

console.log(stringCompress("abc"))
console.log(stringCompress("aaAbBcc"))