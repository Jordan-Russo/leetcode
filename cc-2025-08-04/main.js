class MyHashMap{
    constructor(){
        this.map = new Map();
    }
    put(key, value){
        this.map.set(key, value);
    }
    get(key){
        return this.map.get(key) ?? -1;
    }
    remove(key){
        this.map.delete(key);
    }
}
