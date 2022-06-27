let A = [100,180,260,310,40,535,695];
let n = A.length;
let res = [];
let i = 0;
while(i<n-1){
    while(i<n-1 && (A[i+1] <= A[i])){
        i++;
    }
    if(i == n-1) break; 
    
    let buy = i++;
    while(i<n && A[i] > A[i-1]){
        i++;
    }

    let sell = i-1;
    //console.log("buy- ",buy," sell-",sell);
    res.push([buy,sell]);
}
console.log(res);