let arr = [3, 30, 34, 5, 9];


function stack(x,y){
    let c = x.toString() + y.toString();
    let d = y.toString() + x.toString();
    return (parseInt(d)-parseInt(c));
}
function sss(arr){

    arr.sort(stack);
    let res = arr.join('');
    console.log(res);

}
sss(arr)

