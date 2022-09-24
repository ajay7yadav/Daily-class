var nextGreatestLetter = function(letters, target) {

    let l = 0, r = letters.length-1;
    while(l < r){
        let m = Math.floor(l+(r-l)/2);
        if(letters[m] > target){
            r = m-1;
        }
        else{
            l = m+1;
        }
    }
    return letters[ l % letters.length];
};

let letters = ["c","f","j"], target = "a";
console.log(nextGreatestLetter(letters, target));