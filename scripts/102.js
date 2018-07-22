// var count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// for (var count=0; count < 10; count++) {
//     console.log(count);
// }

// var letters = ['a', 'b', 'c'];

// for (var i = 0; i < letters.length; i++) {
//     console.log(letters[i]);
// }

// for (var letter of letters) {
//     console.log(letter);


// Exercise 1:
// var printNumbersFor = function (start, end) {
//     for (start; start <= end; start++) {
//         console.log(start);
//     }
// };

// printNumbersFor(1, 10);

// var printNumbersWhile = function (start, end) {
//     while (start <= end) {
//         console.log(start);
//         start++;
//     }
// };

// printNumbersWhile(1, 10);

// // Exercise 2:
// var square = function (size, char) {
//     var count1 = 0;
//     while (count1 < size) {
//         var line = '';
//         var count2 = 0; 
//         while (count2 < size) {
//             line = line + char + ' ';
//             count2++;
//         }
//         console.log(line);
//         count1++;
//     }
// };

// square(5, '*');

// // Exercise 3:
// var box = function (height, width, char1, char2) {
//     var count1 = 0;
//     while (count1 < height) {
//         var line = '';
//         var count2 = 0;
//         while (count2 < width) {
//             if (count1 === 0 || (count1 + 1) === height) {
//                 line += char1;
//             }
//             else if (count2 > 0 && count2 < (width - 1)) {
//                 line += char2;
//             }
//             else {
//                 line += char1;
//             }
//             count2++;
//         }
//         console.log(line);    
//         count1++;    
//     }
// }

// box(5, 8, '*', ' ');

// // Exercise 4:
// var banner = function (message, char) {
//     var count1 = 0;
//     while (count1 < 3) {
//         var line = '';
//         if (count1 === 0 || count1 === 2) {
//             var count2 = 0;
//             while (count2 < (message.length + 4)) {
//                 line += char;
//                 count2++;
//             }
//         }
//         else {
//             line = `${char} ${message} ${char}`;
//         }
//         console.log(line);    
//         count1++;    
//     }
// };

// banner('Frodo Lives!', '*');

// Exercise 5:
// var factors = function (num) {
//     var factorList = [];
//     var count = 0;
//     while (count < num) {
//         if (num % count === 0) {
//             factorList.push(count);
//         }
//         count++;    
//     }
//     return factorList;
// };

// console.log(factors(20));


// Exercise 6:

// // Takes three arguments from cipher() and determines the replacement letter, based on the offset
// var getOffset = function (offset, abc, letter) {
//     var count = 0;
//     while (true) {
//         if (letter === abc[count]) {
//             var position = (abc.length - count);

//             // Checks to see if the number is being decrypted
//             if (offset < 0) {
//                 if (offset < (-1 * count)) {
//                     var newOffset = (abc.length + (count + offset));
//                     return abc[newOffset];
//                 }
//             }
//             // Checks to see if number is being encrypted
//             if (offset > position) {
//                 var newOffset = (offset - position);
//                 return abc[newOffset];
//             }
//             else {
//                 return abc[count + offset];
//             }        
//         }
//         count++;    
//     }
// };
// // Finds the case of the letter and uses getOffset() to determine the replacement letter
// // Returns the full encrypted message
// var cipher = function (string, offset) {
//     var lowerAbc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     var upperAbc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     var newString = '';

//     for (var letter of string) {
//         if (lowerAbc.includes(letter)) {
//             newString += getOffset(offset, lowerAbc, letter);
//         }
//         else if (upperAbc.includes(letter)) {
//             newString += getOffset(offset, upperAbc, letter);
//         }
//         else {
//             newString += letter;
//         }
//     }
//     return newString;
// };

// // Takes a message and encrypts it according to the offset
// var encrypted = cipher('I am the master of my fate, I am the captain of my soul.', 10);

// console.log(encrypted);

// // Takes an encrypted message and returns the original
// var solved = cipher(encrypted, -10);

// console.log(solved);


// // Exercise 7:
// var leet = function (string) {
//     var leetAbc = ['a', 'e', 'g', 'i', 'o', 's', 't'];
//     var leetNum = ['4', '3', '6', '1', '0', '5', '7'];
//     var newString = '';

//     for (var letter of string) {
//         letter = letter.toLowerCase();
//         if (leetAbc.includes(letter)) {
//             var count = 0;
//             while (count < leetNum.length) {
//                 if (letter === leetAbc[count]) {
//                     newString += leetNum[count];
//                     break;
//                 }
//                 else {
//                     count++;
//                 }
//             }
//         }
//         else {
//             newString = newString + letter;
//         }
//     }
//     return newString;
// };

// var message = leet('I am the master of my fate; I am the captain of my soul.');
// console.log(message);

// var isEven = function(num) {
//     return num % 2 === 0;
// };

// Exercise 8
// var extendLongVowels = function (string, vowels, length) {
//     var newString = '';
//     var previousLetter = '';
//     var vowelsToLengthen = vowels;
//     for (var letter of string) {
//         if (vowelsToLengthen.includes(letter) && letter === previousLetter) {
//             for (var i = 1; i < length; i++) {
//                 newString += letter
//             }
//         }
//         else { 
//             newString += letter;
//             previousLetter = letter.toLowerCase();
//         }
//     }
//     return newString;
// };

// var test = extendLongVowels('Ooh, have some cheese, Gromit!', ['e', 'o'], 5);
// console.log(test);

// Exercise 9:
// var sumNumbers = function (listToSum) {
//     answer = 0;
//     for (var num of listToSum) {
//         answer += num;
//     }
//     return answer;
// };

// var test = [4, 2, 6, 22];
// console.log(sumNumbers(test));

// Exercise 10:
// var positiveNums = function (listToCheck) {
//     var answer = [];
//     for (var num of listToCheck) {
//         if (num >= 0) {
//             answer.push(num);
//         }
//     }
//     return answer;
// };

// var test = [1, -3, -22, 4, 55, 0];
// console.log(positiveNums(test));
