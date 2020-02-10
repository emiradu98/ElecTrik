function Sync(){
    this.arr = [];
    this.add = function(client,token){
        this.arr.push([client,token,'']);
    }

    this.quickAdd = function(d1,d2,d3){
        this.arr.push([d1,d2,d3]);
    }

    this.getArray = function(){
        return this.arr;
    }
}
let sync = new Sync();
module.exports = ()=>{
    return sync;
}
