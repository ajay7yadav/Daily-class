let arr = [[1,2],[3,5],[6,7],[8,10],[12,16]];

function overLapping(arr){
    
    arr.sort((x,y)=>x[0]-y[0]);

    let st = arr[0][0];
    let ed = arr[0][1];
    let res = [];

    for(let i=1; i<arr.length; i++){

        if(arr[i][0] <= ed){
            ed = Math.max(ed, arr[i][1])
        }
        else{
            res.push([st,ed]);
            st = arr[i][0];
            ed = arr[i][1];
        }
    }
    res.push([st, ed])
    console.log(res);
}
arr = [[1,3],[2,4],[6,8],[9,10]];
arr = [[6,8],[1,9],[2,4],[4,7]];
overLapping(arr);
