/**
CTCI - 1.6
String Compression: 
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3. 
If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string 
has only uppercase and lowercase letters (a - z). 
I: string
O: compressed string
C: optimize
E: empty string, compressed string that's same length as the original string
*/

//time complexity: linear
//space complexity: constant


function stringCompression(s) {
    let count = 1
    let out = ''
    for (let i = 0; i < s.length; i++){
        let curChar = s[i];
        let nextChar = s[i + 1];
        if (curChar === nextChar){
            count++
        } else { 
            out = out + curChar + String(count);
            count = 1;
        }
    }
    return out.length < s.length ? out : s;
}

console.log(
    stringCompression('aabcccccaaa') === 'a2b1c5a3',
    stringCompression('aa') === 'aa',
    stringCompression('aaAAaa') === 'aaAAaa',
    stringCompression('aaaAAaa') === 'a3A2a2',
    stringCompression('') === ''
  );

