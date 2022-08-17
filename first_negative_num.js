//2. Write a program to find the square of given number from 0 to n

function printFirstNegativeInteger(n, k, arr) {
    
    let i=0, j=0;
    let res = [];
    let win = [];
    while(j<n){
        if(arr[j] < 0){
            win.push(arr[j]);
        }
        // if(j-i+1 < k){
        //     j ++;
        // }
       if(j-i+1 == k){
            if(win.length === 0){
                res.push(0);
            }
            else{
                res.push(win[0]);
                if(arr[i] == win[0]){
                    win.shift();
                }
            }
            i ++;
        }
        j ++;
    }
    return res;
}

let arr = [-8, 2, 3, -6, 10],k = 2
console.log(printFirstNegativeInteger(arr.length,k,arr));