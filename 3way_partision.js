let arr = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32];
let a = 14, b = 20;
let n = arr.length;

let l = 0, r = n-1;

for(let i=0; i<r;){
    if(arr[i] < a){
        let temp = arr[l];
        arr[l] = arr[i];
        arr[i] = temp;
        l ++;
        i ++;
    }
    else if(arr[i]>b){
        let temp = arr[r];
        arr[r] = arr[i];
        arr[i] = temp;
        r --;
        
    }
    else{
        i ++;
    }
}