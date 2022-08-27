
function subset(num, idx, res, temp){
    if(idx >= num.length){
        temp.push([...res]);
        return;
    }
    res.push(num[idx]);
    subset(num, idx+1, res,temp);
    res.pop();
    subset(num, idx+1, res,temp)

}
var subsetsWithDup = function(nums) {
    nums.sort((x,y)=>x-y);
    let res = [];
    let temp = [];
    subset(nums, 0, res, temp);
    let st=Array.from(new Set(temp.map(JSON.stringify)), JSON.parse)
    return st;

};
console.log(subsetsWithDup([4,4,4,1,4]));
