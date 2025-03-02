//Arrow function
Array.prototype.even = function () {
    return this.filter(n => n % 2 == 0);
}
Array.prototype.odd = function () {
    return this.filter(n => n % 2 !== 0);
}
Array.prototype.bigger  = function (x) {
    return this.filter(n => n > x);
}

console.log([1, 2, 3, 4, 5, 6, 7, 8].even());

console.log([1, 2, 3, 4, 5, 6, 7, 8].odd());

console.log([1, 2, 3, 4, 5, 6, 7, 8].bigger(5));