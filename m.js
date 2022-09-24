let t = 7, nums = [2,3,1,2,4,3];

let j = 0;
let win = [];
let sum = 0;
let minLe = Infinity

for(let i=0; i<nums.length; i++){

    sum += nums[i];
    if(sum >= t){
        while(sum > t){

            sum -= nums[j];
            j ++;
        }
        
        minLe = Math.min(minLe, i-j+1);
    }
}

console.log(minLe);