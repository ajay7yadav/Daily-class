let n = 2;

for(let i=3; i<=n; i++){
    let flag = true;
    for(let j=2; j<i; j++){
        if(i%j == 0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        console.log(i);
    }
}