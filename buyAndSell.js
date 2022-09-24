let arr = [100, 80, 60, 70, 60, 75, 85];

function xyz(price){
        let st=[]
        st.push([price[0],0])
        let idx = [];
        idx.push(1)
        for(let i=1;i<price.length;i++){
            
            while(st.length !=0 && st[st.length-1][0] <= price[i]){
                st.pop();
                
            }
            if(st.length == 0){
                idx.push(i+1);
                
            }
            else{
                idx.push(i- st[st.length-1][1]);
                
            }
            st.push([price[i],i]);
        }

        console.log(idx);
       
}
//xyz(arr)