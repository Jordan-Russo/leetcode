/**
 * @param {number} capacity
 */

class Node{
    constructor(key,val){
        this.key = key;
        this.val = val
        this.next = this.prev = null
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.cache = new Map()
        this.head = this.tail = null
    }
    // remove node from list, return node
    remove(node){
        // node before and after
        // node before
        // node after
        // no nodes before and after
        // node isn't a node
        if(!node){
            return node
        }else if(node.prev && node.next){
            const prev = node.prev
            const next = node.next
            prev.next = next
            next.prev = prev
            node.prev = null
            node.next = null
        }else if(node.prev){
            const prev = node.prev
            if(this.tail === node){
                this.tail = this.tail.prev
            }
            prev.next = null
            node.prev = null
        }else if(node.next){
            const next = node.next
            if(this.head === node){
                this.head = this.head.next
            }
            next.prev = null
            node.next = null
        }else{
            this.head = this.tail = null
        }
        return node
    }
    // insert to HEAD, most recent
    insert(node){
        if(!this.head){
            this.head = this.tail = node
        }else if(node){
            node.next = this.head
            this.head.prev = node
            this.head = node
        }else{
            return
        }
    }
    get(key){
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
            this.insert(this.cache.get(key))
            return this.cache.get(key).val
        }
        return -1
        // return value within node if it exists
        // otherwise return -1

        // should also modify the order of the queue
        // should also remove the LRU node if capacity is exceeded
    }
    put(key, val){
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
        }
        this.cache.set(key, new Node(key, val))
        this.insert(this.cache.get(key))
        if(this.cache.size > this.capacity){
            // delete LRU node from linked list and map
            const lru = this.tail
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */