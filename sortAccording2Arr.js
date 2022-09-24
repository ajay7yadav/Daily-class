// Sort 1st array according to 2nd Array

function sortAccording(a1, a2){

    let mp = new Map();
    for(let i=0; i<a1.length; i++){
        if(mp.has(a1[i])){
            mp.set(a1[i], mp.get(a1[i])+1);
        }
        else{
            mp.set(a1[i], 1);
        }
    }
    let temp = [];
    for(let i=0; i<a2.length; i++){
        while(mp.get(a2[i]) >= 1){
            temp.push(a2[i]);
            mp.set(a2[i], mp.get(a2[i])-1);
        }
    }
    //console.log(mp);
    let st = [];
    mp.forEach((keys, value)=>{
        // if(keys > 0){
        //     st.push(value);
        // }
        while(keys > 0){
            st.push(value);
            //mp.set(a2[i], mp.get(a2[i])-1);
            keys --
        }
    });
    //console.log(st);
    st.sort((x,y)=>x-y);
    let l = 0;
    let n = temp.length+st.length;

    for(let i=temp.length; i<n; i++){
        temp[i] = st[l++];
    }
    console.log(temp);
}
A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
A2 = [2, 1, 8, 3];

A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
A2 = [99, 22, 444, 56]
sortAccording(A1, A2);