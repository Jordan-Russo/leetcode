// url: https://leetcode.com/problems/time-based-key-value-store/

// Make the following datastructure:
// time-based, key-value, stores multiple values for the same key at different time stamps
// retrieves key value at a time stamp

// initialize datastructure with new TimeMap()

// can call method set(key, value, timeStamp)
// timestamps will always be set in increasing order of time (a positive integer)

// can call method get(key, timestamp)
    // If there is a match with key and timestamp return it
    // if there are values but none match return the value with the largest previous timestamp
    // if there are no values for that key return ""

    var TimeMap = function() {
        this.data = new Map()
    };
    
    /** 
     * @param {string} key 
     * @param {string} value 
     * @param {number} timestamp
     * @return {void}
     */
    TimeMap.prototype.set = function(key, value, timestamp) {
        // does it exist
        if(!this.data.has(key)){
            this.data.set(key, [])
        }
        this.data.get(key).push([timestamp, value])
    };
    
    /** 
     * @param {string} key 
     * @param {number} timestamp
     * @return {string}
     */
    TimeMap.prototype.get = function(key, timestamp) {
        const values = this.data.get(key)
        if(!values){
            return ''
        }
        let low = 0
        let high = Math.min(values.length, timestamp)
        let middle
        while(low < high){
            middle = Math.floor((low + high) / 2)
            const [time, value] = values[middle]
            if(time === timestamp){
                return value
            }else if(time > timestamp){
                high = middle
            }else{
                low = middle + 1
            }
        }
        // check if array has any value before high/low
        // if so return it
        // otherwise return ""
        const hasPrev = (high - 1) in values
        const value = hasPrev ? values[high - 1][1] : ""
        return value
    };
    
    
    
    /** 
     * Your TimeMap object will be instantiated and called as such:
     * var obj = new TimeMap()
     * obj.set(key,value,timestamp)
     * var param_2 = obj.get(key,timestamp)
     */