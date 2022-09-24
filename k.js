function reverseStr(str){
    let rev = "";
    let out = "";
    for(let i=0; i<str.length; i++){
        rev += str[i];
        if(str[i] == ' '){
            rev = rev.split("").reverse().join("");
            out += rev + " ";
            rev = "";
        }
    }
    rev = rev.split("").reverse().join("");
    out += rev + " ";
    console.log(out);
}
//reverseStr("This is boy");



let x = {
    a : 70,
    b : 90,
    c : 99
};
console.log(Object.keys(x).length);
delete x.a;
console.log(Object.keys(x).length);

//////////////////////////////////////////////////////////////

function findDomain(input, req){
    let domain = {};

}
let visits=["google.com",25,"accounts.google.com",15,"sdettech.com",10,"yahoo.org",5,"mail.yahoo.org",2]
findDomain(visits, ".com")

//visits[0].length

