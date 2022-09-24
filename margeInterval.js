let interval = [[1,2],[3,5],[6,7],[8,10],[12,16]];

interval.sort((x,y)=>{return x[0]-y[0]});

//console.log(interval);
let st = interval[0][0];
let ed = interval[0][1];

