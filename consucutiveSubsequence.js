function consecutiveSubsequence(arr, n){
    let mp = new Map();
    for(let i=0; i<n; i++){
        mp.set(arr[i]);
    }
    let i = 0;
    let res = 0;
    while(i<n){
        let c = 0;
        if(!mp.has(arr[i]-1)){
            let el = arr[i];
            while(mp.has(el)){
                //console.log(el);
                el ++;
                c ++;
            }
        }
        res = Math.max(res, c);
        i ++;
    }
    console.log(res);
}
let arr = [2,6,1,9,4,5,3];
arr = [1,9,3,10,4,20,2]

consecutiveSubsequence(arr, arr.length)