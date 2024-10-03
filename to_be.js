
var expect = function(val) {
    return {
        toBe: (v2)=>{
            if(val!==v2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (v2)=>{
            if(val===v2) throw new Error("Equal");
            else return true;
        }


    }
    
};

