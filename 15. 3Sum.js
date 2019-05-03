//三指针操作
//使一变化只能以一针的变化实现

var threeSum = function (nums) {
	nums.sort((a,b)=>a-b)
	let ret = [],len = nums.length

	for (let is=0;is<len-2;is++){
		while (nums[is]===nums[is-1])is++ //第二 第三 数的各种组合都试过了，第一得不一样
		if (nums[is]>0) return ret//小数>0，和必>0
		for (let im=is+1,ib=len-1;im<ib;){
			let sum = nums[is]+nums[ib]+nums[im]
			if (sum==0) {
				ret.push([nums[is],nums[im],nums[ib]])
				do {im++} while (nums[im]===nums[im-1])
				do {ib--} while (nums[ib]===nums[ib+1])
			} else if (sum<0) im++
			else ib--
		}
	}
	return ret 
};
