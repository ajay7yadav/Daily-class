let nums = [100, 4, 200, 1, 3, 2];
//let nums = [0, 0, -1]

let mp = new Map();

for(let i=0; i<nums.length; i++){
    mp.set(nums[i]);
}

let maxCount = 0;
for(let i=0; i<nums.length; i++){
    if(!mp.has(nums[i]-1)){
        let ele = nums[i];
        let count = 1;

        while(mp.has(ele+1)){
            count ++;
            ele ++;
        }
        maxCount = Math.max(maxCount, count)
    }
}

console.log(maxCount);