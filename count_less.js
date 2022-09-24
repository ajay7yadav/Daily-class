// count in 2 array elements are less then array one elements

function count(ar1,ar2){
    
    ar2.sort((x,y)=>x-y);
    let ans = [];
    for(let i=0; i<ar1.length; i++){
        let l=0, r = ar2.length-1;
        let c = 0;
        while(l <= r){
            let m = Math.floor(l+(r-l)/2);
            if(ar2[m] <= ar1[i]){
                c = m+1;
                l = m+1;
            }
            if(ar2[m] > ar1[i]){
                r = m-1;
            }
        }
        ans.push(c);
    }
    console.log(ans);
}
let ar1 = [1,2,3,4,7,9];
let ar2 = [0,1,1,1,2,4];
count(ar1,ar2)
//4 5 5 6 6 6