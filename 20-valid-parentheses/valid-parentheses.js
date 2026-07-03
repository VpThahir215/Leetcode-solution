/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 let stack = [];

    for (let val of s) {
        if (val === "(" || val === "{" || val === "[") {
            stack.push(val);
        } else {
            if (stack.length === 0) {
                return false;
            }

            let top = stack.pop();

            if (
                (val === ")" && top !== "(") ||
                (val === "}" && top !== "{") ||
                (val === "]" && top !== "[")
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};