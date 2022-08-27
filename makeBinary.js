function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}
function tree(preorder,inorder,preindex,rootnode)
{
    if(preindex==preorder.length)
    return
    let value=preorder[preindex]
    let node=new TreeNode(value)
    let rootvalue=rootnode.val
    let rootindex=find(inorder,rootvalue)
    let nodeindex=find(inorder,value)
    if(nodeindex < rootindex)
    {
        rootnode.left=node
        tree(preorder,inorder,preindex-1,rootnode.left)
    }
    else  
    {
        rootnode.right=node
        tree(preorder,inorder,preindex+1,rootnode.right)
    } 
}
function find(val,inorder)
{
    for(let i=0;i<inorder.length;i++)
        {
            if(val==inorder[i])
                return i
        }
}
var buildTree = function(preorder, inorder) {
    let rootnode=new TreeNode()
    rootnode.val=preorder[0]
    let preindex=1
    tree(preorder,inorder,preindex,rootnode)
    return rootnode
};
let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder));