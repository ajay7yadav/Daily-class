let stack = [7, 1, 5, 3, 6, 4];
let leftMin = stack[0];
let maxdiff = 0;


for(let i=0; i<stack.length; i++){
    if(stack[i] < leftMin){
        leftMin = stack[i];
    }
    maxdiff = Math.max(maxdiff, stack[i]-leftMin)
}
console.log(maxdiff);