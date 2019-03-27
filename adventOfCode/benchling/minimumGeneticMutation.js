/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    var set = new Set(bank);
    if(!set.has(end))   return -1;
    var visited = new Set();
    visited.add(start);
    
    var q = [];
    q.push(start);
    var count = 1;
    while(q.length!==0){
        var size = q.length;
        
        for(var i = 0;i<size;i++){
            var a = q.shift();
            if(oneM(a,end)) return count;
            set.forEach((b)=>{
                if(!visited.has(b) && oneM(a,b)){
                    q.push(b);
                    visited.add(b);
                }
            });
        }
        
        count++;
    }
    return -1;
};

var oneM = function(a,b){
    var count = 0;
    for(var i =0;i<a.length;i++){
        if(a[i]!==b[i]){
            count++;
        }
    }
    return count===1;
};