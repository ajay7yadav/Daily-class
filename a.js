let A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
let A2 = [2, 1, 8, 3];

function relativeSort(a1,a2){
    //a1.sort((x,y)=>x-y);
    let res = [];
    for(let i=0; i<a2.length; i++){
        for(let j=0; j<a1.length; j++){

        }
    }
}
//relativeSort(A1,A2)

// Longest K unique characters substring

function uniqueSubsting(s, k){
    let i = 0, j = 0;
    let mp = new Map();
    let res = 0;
    while(j < s.length){
        if(mp.size > k){
            while(mp.size > k){
                
                if(mp.get(s[i]) > 1){
                    mp.set(s[i], mp.get(s[i])-1)    
                }
                else{
                    mp.delete(s[i]);
                }
                i ++;
            }
        }
        if(mp.size == k){
            res = Math.max(res, j-i);
            //j++;
        }
        if(mp.size < k){
            if(mp.has(s[j])){
                mp.set(s[j], mp.get(s[j])+1);
            }
            else{
                mp.set(s[j], 1)
            }
            //j ++;
        }
        res = Math.max(res, j-i);
        j ++;
    }
    console.log(res);
    console.log(mp);
    //return res>0?res:-1;
}
//let s = "aabacbebebe", k = 3
s = "repggxrpnrvy", k = 12
//console.log(uniqueSubsting(s, k));


