function makeEqual(){
    //let arr = [5, 20, 3, 2, 5, 80], x = 78;  // 2, 80
    let arr = [90, 70, 20, 80, 50], x = 45     // -1
    let mp = new Map();
    for(let i=0; i<arr.length; i++){
        mp.set(arr[i],1)
    }

    for(let i=0; i<arr.length; i++){
        let v = Math.abs(x-arr[i]);

        if(mp.has(v)){
            console.log(v, arr[i]);
        }
    }
}
makeEqual()