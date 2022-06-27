class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
class Hight {
    constructor(){
        this.h = 0;
    }
}
function diameter(root){
    let hight = new Hight();
    return diameterOfTree(root,hight);
}
function diameterOfTree(root,hight){
    let lHight = new Hight()
    let rHight = new Hight()
    if(root == null){
        hight.h = 0;
        return 0
    }

    let ldiameter = diameterOfTree(root.left,hight);
    let rdiameter = diameterOfTree(root.right,hight);

    hight.h = Math.max(lHight.h, rHight.h) + 1;

    return Math.max(lHight.h + rHight.h, Math.max(ldiameter, rdiameter))
}

console.log(diameter(root));