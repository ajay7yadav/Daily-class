
function countZero(arr){
    let c = 0;
    let l=0, r = arr[0].length-1;
    while(l < arr.length && r >= 0){
        //console.log(arr[l][r]," l-> ",l, " r -> ",r, " C-> ",c);
        if(arr[l][r] == 1){
            r --;
        }
        else{
            c += r+1;
            l ++;
        }
    }
    console.log(c);
}

arr =  [[0, 0, 0],
        [0, 0, 1],
        [0, 1, 1]]

countZero(arr);