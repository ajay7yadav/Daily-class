let a1 = [11, 1, 13, 21, 3, 7];
let a2 = [11, 3, 7, 1];
// let a1 = [1, 2, 3, 4, 5, 6, 7, 8]
// let a2 = [1, 2, 3, 1];
function isSubset(a1, a2){
    let mp = new Map()
    for(let i=0; i<a1.length; i++){
        if(mp.has(a1[i])){
            mp.set(a1[i], mp.get(a1[i])+1);
        }
        else{
            //console.log("else");
            mp.set(a1[i], 1);
        }
    }
    console.log(mp);
    for(let i=0; i<a2.length; i++){
        console.log(mp);
        if(mp.has(a2[i])){
            if(mp.get(a2[i]) != 0){
                mp.set(a2[i],mp.get(a2[i])-1);
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    return true;
    
}
console.log(isSubset(a1, a2));