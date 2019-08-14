var MinStack = function () {
    this.stack = [];
    this.min = [];
};

MinStack.prototype.push = function (x) {
    if (!this.min.length || this.min[this.min.length - 1] >= x) this.min.push(x);
    this.stack.push(x)
};

MinStack.prototype.pop = function () {
    if (this.min[this.min.length - 1] == this.stack.pop()) this.min.pop()
};

MinStack.prototype.top = () => this.stack[this.stack.length - 1]

MinStack.prototype.getMin = () => this.min[this.min.length - 1]