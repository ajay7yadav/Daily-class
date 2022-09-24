// Re- Order array according to index
function reOrder(arr, idx){
    
    let res = [];
    for(let i=0; i<idx.length; i++){
        res.push([arr[i], idx[i]]);
    }
    res.sort((x,y)=>{
        return x[1]-y[1]
    });
    //console.log(res);
    for(let i=0; i<arr.length; i++){
        arr[i] = res[i][0];
        idx[i] = res[i][1];
    }
    console.log(arr);
    console.log(idx);
}
// arr = [10, 11, 12];
// let idx = [1, 0, 2];

arr = [50, 40, 70, 60, 90];
let idx = [3,  0,  4,  1,  2]

reOrder(arr, idx)