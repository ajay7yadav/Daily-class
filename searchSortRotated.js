function search(l, r, arr, k){
    while(l <= r){
        let m = Math.floor(l+(r-l)/2);
        if(arr[m] == k){

            return m;
        }
        if(arr[m] < k){
            l = m+1;
        }
        else{
            r = m-1
        }
    }
    return -1;
}
function countSmaller(arr, n, k){
    let l = 0, r = arr.length-1;
    
   while(l < r){
       let m = Math.floor(l+(r-l)/2);
       if(arr[m] <= arr[r]){
           r = m;
       }
       else{
           l = m + 1
       }
   }
   //console.log(r);
   let st = search(0, r-1, arr,k)
   let ed = search(r, n-1, arr,k)
   if(st == -1 && ed == -1){
    console.log(-1);
   }
   if(st != -1){
      console.log(st);
   }
   if(ed != -1){
      console.log(ed);
   }
}

//arr = [4,5,6,7,0,1,2]
arr = [2,5,6,0,0,1,2]
countSmaller(arr, arr.length, 8)