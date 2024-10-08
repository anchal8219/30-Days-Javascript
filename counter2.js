/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var curr=init;
    // var c=init;
    return{
        increment: ()=>{
            curr++;
            return curr;
        },
        decrement: ()=>{
            curr--;
            return curr;
        },
        reset: ()=>{
            curr=init;
            return curr;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */