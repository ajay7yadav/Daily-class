function countTriplate(arr){
    
    arr.sort((x,y)=>x-y);

    for(let i=0; i<arr.length; i++){
        let X = arr[i];
        let l=0, r = arr.length-1;
        while(l < r){
            if(arr[l]+arr[r] == X){
                console.log("Yes");
            }
            if(arr[l]+arr[r] < X){
                l ++;
            }
            else{
                r --
            }
        }
    }
}
arr = [1, 5, 3, 2];
arr = [2, 3, 4];
countTriplate(arr)