// find Unqiue element between both array

function intersert (nums1, nums2) {
    let mp = new Set();
    for(let i=0; i<nums1.length; i++){
        mp.add(nums1[i]);
    }
    let res = new Set();
    for(let i=0; i<nums2.length; i++){
        if(mp.has(nums2[i])){
            res.add(nums2[i]);
        }
    }
    let a = []
    res.forEach((val)=>{
        a.push(val)
    })
    console.log(a);
};
let nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersert(nums1, nums2));