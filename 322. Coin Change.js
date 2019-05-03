function coinChange(coins, amount) {
    coins.sort((a,b)=>b-a)

    let res = Infinity

    function rec(al,cti,ta){//al= amount left, cti = current_type_ind, ta=total amount
        const fv = coins[cti] //face value
        let ca = Math.floor(al/fv)

        if (cti<coins.length-1)
            for (;ca>=0&&ca+ta<res;ca--)
                rec(al-ca*fv,cti+1,ta+ca)
        else if (al%fv==0) res= Math.min(res,ca+ta)
    }

    rec(amount,0,0)
    return res==Infinity?-1:res
}

