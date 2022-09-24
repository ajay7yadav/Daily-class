function maximizeNumber(arr, m){
    let i=0;
    let j=0;
    
    while(i<arr.length){

        if(arr[i]==0)
            m--;
        if(m<0)
        {
            if(arr[j]==0)
            {
                m++;
            }
            j++;
        }
        i++;

    }
    console.log(i-j);
    
}
let num = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1];
let m = 2;
maximizeNumber(num, m)