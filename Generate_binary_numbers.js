let n = 7;
// output 1, 10

// n = 5
//output = 1, 10, 11, 100, 101
let res = [];
let qu = [];
qu.push("1");
while(n--){
    let s1 = qu[0];
    qu.shift();
    res.push(parseInt(s1));

    let s2 = s1;
    qu.push(s1+'0');
    qu.push(s2+'1');
}
console.log(res);