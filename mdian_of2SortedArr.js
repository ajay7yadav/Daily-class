//let nums1 = [1,3], nums2 = [2,4];
let nums1 = [], nums2 = [2,3]

function medianOfTwoSortedArr(nums1, nums2){
    let i = 0;
    let j = 0;
    let temp = [];
    
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]){
            temp.push(nums1[i++]);
        }else{
            temp.push(nums2[j++]);
        }
    }
    while(i<nums1.length){
        temp.push(nums1[i++]);
    }
    while(j<nums2.length){
        temp.push(nums2[j++]);
    }
    if(temp.length %2 == 0){
        let idx = Math.floor(temp.length/2);
        let idx2 = idx-1;
        let median = (temp[idx]+temp[idx2])/2;
        console.log(median);
    }
    else{
        let idx = Math.floor(temp.length/2);
        let median = (temp[idx]);
        console.log(median);
    }
}
medianOfTwoSortedArr(nums1, nums2)