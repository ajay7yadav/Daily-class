function singleElement(){
    let arr = [1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65]
    let res = arr[0];
    for(let i=1; i<arr.length; i++){
        res = res^arr[i]
    }
    console.log(res);
}
singleElement()