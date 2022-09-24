let arr = [100,180,260,310,40,535,695];

function stockBuySell(arr, n){
    let res = [];
    let flag = false;
    for(let i = 0; i<n; i++){
        let buy = i, sell = i;
        while(i<n-1 && arr[i] >= arr[i+1])i++;
        buy = i;
        while(i<n-1 && arr[i] <= arr[i+1])i++;
        sell = i;
        
        if(sell-buy > 0){
            flag = true;
            res.push([buy, sell]);
        }
    }
    console.log(res);
}
arr = [23, 13, 25, 29, 33, 19, 34, 45, 65, 67]
stockBuySell(arr, arr.length);