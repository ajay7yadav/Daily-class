var searchRange = function(nums, t) {
    let l = 0, r = nums.length-1;
    let s = -1;
    let e = -1;
    while(l <= r){
        let m = Math.floor(l+(r-l)/2);
        if(nums[m] == t){
            e = m;
            l += 1;
        }
        else if(nums[m] < t){
            l = m+1;
        }
        else{
            r = m-1;
        }
    }
    l = 0, r = nums.length-1
    while(l <= r){
        let m = Math.floor(l+(r-l)/2);
        if(nums[m] == t){
            s = m;
            r -= 1;
        }
        else if(nums[m] < t){
            l = m+1;
        }
        else{
            r = m-1;
        }
    }
    let res = [];
    res.push(s);
    res.push(e);
    console.log(res);
};
let nums = [2,5,6,0,0,1,2], t = 8
//let nums = [1], t = 1
//searchRange(nums, t)