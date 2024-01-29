function ass(b){
    return b * b
}

ass.prototype.bs = function (a) {
    return a + a
}

console.log(ass(2).bs(3))