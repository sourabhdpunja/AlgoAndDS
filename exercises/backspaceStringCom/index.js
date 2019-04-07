
// Two Pointer Approach
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let i = S.length - 1
    let j = T.length - 1
    let skipCountS = 0
    let skipCountT = 0

    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S[i] === '#') {
                skipCountS++;
                i--;
            } else if (skipCountS > 0) {
                skipCountS--;
                i--;
            } else {
                break;
            }
        }
        while (j >= 0) {
            if (T[j] === '#') {
                skipCountT++;
                j--;
            } else if (skipCountT > 0) {
                skipCountT--;
                j--;
            } else {
                break;
            }
        }

        if (S[i] != T[j]) {
            return false;
        }
        i--;
        j--;
    }
    return true;
};

// Stack Based solution O(N) spaces
function backspace(S) {
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            stack.pop();
        } else {
            stack.push(S[i]);
        }
    }
    return stack.join('');
}

var backspaceCompare = function (S, T) {
    return backspace(S) === backspace(T);
};


// One Pointer O(N) space 
function backspace(S) {
    let i = S.length - 1;

    let poundCount = 0;
    let newStr = '';

    while (i >= 0) {
        if (S[i] === '#') {
            poundCount++;
        } else {
            if (poundCount === 0) {
                newStr = S[i] + newStr;
            } else {
                // skip char and decrement poundCount
                poundCount--;
            }
        }
        // process one char at the time
        i--;
    }

    return newStr;
}

var backspaceCompare = function (S, T) {
    return backspace(S) === backspace(T);
};