let arr = [10, 19, 6, 3, 5];
//let arr = [2, 8, 5, 4]
let temp = [];

for(let i=0;i<arr.length; i++){
    temp.push(arr[i]);
}
temp.sort((x,y)=>x-y);
let swap = 0;
let i = 0;
for(let j=0; j<arr.length; j++)
{
    if(arr[j] == temp[i]){
        i++;
        continue;
    }
    else{
        let k;
        for(k= j+1; k<arr.length; k++){
            if(temp[k] == arr[i]){
                break;
            }
        }
        let tp = temp[k];
        temp[k] = temp[i];
        temp[i] = tp;
        i++;
        swap++;
    }
}
console.log(swap);
console.log(temp);
console.log(arr);
