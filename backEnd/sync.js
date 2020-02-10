function Sync(){
    this.arr = [];
    this.markOne = function(){
        arr.push(1);
    }
    this.getArray = function(){
        return arr;
    }
}

module.exports = Sync;