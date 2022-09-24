let str = 'acccbaaacccbaac';

function longestPrefixSuffix(str, n){
    let top = 0;
    let res = new Array(n).fill(0);

    for(let buttom=1; buttom<n; buttom++){
        while(top != 0 && str.charAt(buttom) != str.charAt(top)){
            top = res[top-1];
        }
        if(str.charAt(top) == str.charAt(buttom)){
            top ++;
            res[buttom] = top;
        }
    }
    console.log(res[n-1]);
}
longestPrefixSuffix(str, str.length);