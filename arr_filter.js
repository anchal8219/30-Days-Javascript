/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.filter((ele,ind)=>{
        return fn(ele,ind);
    })
};



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const fa = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i))
        fa.push(arr[i]); 
    }
    return fa;
}