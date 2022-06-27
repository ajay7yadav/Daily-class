// N = 4
// arr[] = {geeksforgeeks, geeks, geek,
//          geezer}
// Output: gee
// Explanation: "gee" is the longest common
// prefix in all the given strings.

let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];

function longestCommonPrefix(arr){
    let min_L = Number.MAX_SAFE_INTEGER;
    let idx = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length < min_L){
            min_L = arr[i].length;
            idx = i;
        }
    }
    for(let i=0; i<arr.length; i++){
        if(i != idx){
            while((arr[i].substring(0,min_L) != arr[idx].substring(0,min_L))){
                min_L --;
            }
            if(min_L == 0){
                return "-1";
            }
        }
    }
    return arr[idx].substring(0, min_L);
}
console.log(longestCommonPrefix(arr));