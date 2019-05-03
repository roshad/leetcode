var findKthLargest = function (nums, k) {
    return qs(nums, nums.length - k);
};

function qs(arr, ind_k, indL = 0, indR = arr.length - 1) {
    function swap(ind1, ind2) { [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]] }
    
    let ind_to_pivot = indL, pivot = arr[indR]

    for (let ind_loop = indL; ind_loop < indR; ind_loop++) {
        if (arr[ind_loop] < pivot)
            swap(ind_to_pivot++, ind_loop)
    }
    swap(ind_to_pivot, indR)

    return (
        ind_to_pivot == ind_k ? pivot :
        ind_to_pivot < ind_k ? qs(arr, ind_k,ind_to_pivot + 1, indR) :
        qs(arr, ind_k,indL, ind_to_pivot - 1)
    )
}