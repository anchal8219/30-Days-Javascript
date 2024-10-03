/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(var i=0;i<arr.length;i++){
        arr[i]=fn(arr[i],i);
    }
    return arr;
};

// by using map 
var map = function(arr, fn) {
    return arr.map((element, index) => fn(element, index));
};