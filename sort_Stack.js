let st = [34,3,31,98,92,23];

function sortS(st){

    let stack = [];
    while(st.length !== 0){
        let el = st.pop();

        if(stack.length == 0 || stack[stack.length-1] < el){
            stack.push(el);
        }
        else{
            
            while(stack.length != 0 && stack[stack.length-1] > el){
                
                st.push(stack.pop());
            }
            stack.push(el);
        }
        
    }
    console.log(stack);
}

sortS(st);

