function ispar(x)
{
    let st = [];
    for(let i=0; i<x.length; i++){
        if(x[i] == '[' || x[i] == '{' || x[i] == '('){
            st.push(x[i]);
        }
        if(st.length == 0){
            return false
        }
        else{
            let cur;
            switch(x[i]){
                case ']' :
                    cur = st.pop();
                    if(cur == '(' || cur == '{'){
                        return false;
                    }
                    break;
                case '}' :
                    cur = st.pop();
                    if(cur == '[' || cur == '('){
                        return false;
                    }
                    break;
                case ')' :
                    cur = st.pop();
                    if(cur == '{' || cur == '['){
                        return false;
                    }
                    break;
            }
        }
    }
    if(st.length == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(ispar("{([])}"));
console.log(ispar("{[]"));

console.log(ispar("]"));