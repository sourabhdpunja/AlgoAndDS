


var isPalindrome = function(x) {
    // 1st solution
    // return x.toString() === x.toString().split('').reverse().join('')

    // 3rd Solution
    var isPalindrome = function(x) {
    
        if (x < 0){
            return false
        }
        
        let div = 1
        while (Math.floor(x/div) >= 10){
            div = div*10
        }
        
        while (x>0){
            const l = Math.floor(x/div)
            const r = Math.floor(x%10)
            
            if (l!==r) {
                return false
            }
            
            x = x%div
            x = Math.floor(x/10)
            div = Math.floor(div/100)
    
        }
        
        return true
    };

    // 2nd Solution
      // Special cases:
        // As discussed above, when x < 0, x is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome,
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.   
    // if ((x !== 0 && x % 10 == 0) || x < 0 ) {
    //     return false
    // }
    
    // let revertedNumber = 0
    
    // while (x > revertedNumber){
    //    revertedNumber = revertedNumber * 10 + x % 10;
    //    x = Math.floor(x/10);   
    // }
    // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
        // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
        // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
    // return x === revertedNumber || x === Math.floor(revertedNumber/10);
};

