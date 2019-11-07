var MinStack = function() {
  this.stack = [];
  this.min = [];
};
MinStack.prototype.push = function(x) {
  this.stack.unshift(x);
  if (x <= this.min[0] || !this.min.length) this.min.unshift(x);
};
MinStack.prototype.pop = function() {
  if (this.min[0] === this.stack.shift()) this.min.shift();
};
MinStack.prototype.top = () => this.stack[0];

MinStack.prototype.getMin = () => this.min[0];
