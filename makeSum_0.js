//let arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
let arr = [0,0,5,5,0,0]

let mp = {};

let temp = [];

let sum = 0;
let res = 0
for(let i=0; i<arr.length; i++){
    sum += arr[i];
    if(sum == 0)temp.push([0, i])
    if(mp[sum]){
        //mp[sum].push(i);
        let vs = mp[sum]
        //console.log(vs);
        for(j in vs){
            temp.push([j+1, i])
        }
    }
    else{
        mp[sum] = [];
    }
    mp[sum].push(i)
}

console.log(temp)