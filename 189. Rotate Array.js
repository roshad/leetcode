
var rotate = function (nums, k) {
    k %= nums.length
    let count = 0;
    for (let start_I = 0; count < nums.length; start_I++) {
        let cur_I = start_I;
        let pre_num = nums[start_I];
        
        do {
            let next = (cur_I + k) % nums.length;
            let temp = nums[next];
            nums[next] = pre_num;
            pre_num = temp;
            cur_I = next;
            count++;
        } while (start_I != cur_I);
    }
    
};
//64ms
function rotate(nums, k){
    k %= nums.length
    reverse(0, nums.length - 1)
    reverse(0,k-1)
    reverse(k,nums.length - 1)

    function reverse(sta,end){
        let tem
        while (sta<end){
            tem = nums[sta]
            nums[sta] = nums[end]
            nums[end] = tem
            sta++;end--
        }
    }
}