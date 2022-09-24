let s = ["eat","tea","tan","ate","nat","bat"]

s.sort();
        let obj = {};
        let ans = [];
        for(let i=0; i<s.length; i++){
            let n = s[i].split('');
            
            n.sort();
            let na = n.join('')
            
            if(obj[na] == s[i]){
                ans.push(s[i])
            }
            else{
                //obj[na] = [s[i]];
                ans.push(s[i])
            }
        }
        // console.log(obj);
        // for(let i in obj) {
        // ans.push(obj[i]);
        // }

 console.log(ans);