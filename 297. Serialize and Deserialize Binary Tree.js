function serialize(root){
    let str=""
    function ms(node){//makeString
        if (!node) return str+="# "
        str+=node.val+" "
        ms(node.left);ms(node.right)
    }
    ms(root)
    
    return str
}

function deserialize(data){
    let arr=data.split(" "),ind=0
    function mt(){
        if (ind>=arr.length||
            arr[ind]=="#") return null
        let node = new TreeNode(arr[ind]*1)
        ind++;node.left=mt()
        ind++;node.right=mt()
        return node
    }
    
    return mt()
}