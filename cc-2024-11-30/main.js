// url: https://leetcode.com/problems/timeout-cancellation/
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// given a function, an array of arguments, and a timeout in ms

// return a cancel function
    // when called prevents the function from being executed.
    // delay function call by the timeout, t
    // if cancelfunction is not invoked within the delay
        // execute function using args as arguments
        // otherwise cancel the function

        var cancellable = function(fn, args, t) {
          // make the timeout
          const call = setTimeout(fn, t, ...args)
          // return a function that will cancel the timeout
          return () => clearTimeout(call)
       };
       
       /**
        *  const result = [];
        *
        *  const fn = (x) => x * 5;
        *  const args = [2], t = 20, cancelTimeMs = 50;
        *
        *  const start = performance.now();
        *
        *  const log = (...argsArr) => {
        *      const diff = Math.floor(performance.now() - start);
        *      result.push({"time": diff, "returned": fn(...argsArr)});
        *  }
        *       
        *  const cancel = cancellable(log, args, t);
        *
        *  const maxT = Math.max(t, cancelTimeMs);
        *           
        *  setTimeout(cancel, cancelTimeMs);
        *
        *  setTimeout(() => {
        *      console.log(result); // [{"time":20,"returned":10}]
        *  }, maxT + 15)
        */