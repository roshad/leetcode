var MinStack = function() {
    this.stack=[]
    this.min=[Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.unshift(val)
    this.min.unshift(Math.min(this.min[0],val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min.shift()
    return this.stack.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[0]
};
