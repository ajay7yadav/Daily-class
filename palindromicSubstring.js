let str = "bccb";
let idx = 0;
let temp = [];

function subset(str, idx, temp){
    if(idx >= str.length){
        if(check(temp) && temp.length >= 1){
            console.log(temp);
        }
        return;
    }
    temp.push(str[idx]);
    subset(str, idx+1, temp)
    temp.pop();
    subset(str, idx+1, temp)
}
function check(str)
{
let i=0,j=str.length-1
while(i<=j)
    {
        if(str[i]==str[j])
           { 
              i++
              j--
           }
        else 
            return false
    }
    return true
}
subset(str, idx, temp)