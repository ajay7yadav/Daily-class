// leetCode

var majorityElement = function(nums) {
    nums.sort((x,y)=>{return x-y});
    let maj = parseInt(nums.length/3);
    let res = [];
    for(let i=0; i<nums.length; i++){
        let j = i+1;
        let c = 1;
        let fg = false;
        while(j < nums.length && nums[j] == nums[i]){
            c ++;
            j ++;
            fg = true;
        }
        if(c > maj){
            res.push(nums[i]);
        }
        if(fg){
            i += c-1;
        }
    }
    return res;
};
let res = majorityElement([-1,-1,-1]);

console.log(res);