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

// Exercise 2:
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

// Exercise 3:
// var box = function (height, width, char1, char2) {
//     var count1 = 0;
//     while (count1 < height) {
//         var line = '';
//         var count2 = 0;
//         while (count2 < width) {
//             if (count1 === 0 || (count1 + 1) === height) {
//                 line = line + char1;
//                 count2++;
//             }
//             else if (count2 > 0 && count2 < (width - 1)) {
//                 line = line + char2;
//                 count2++;
//             }
//             else {
//                 line = line + char1;
//                 count2++;
//             }
//         }
//         console.log(line);    
//         count1++;    
//     }
// }

// box(5, 8, '*', ' ');

// Exercise 4:
// var banner = function (message, char) {
//     var count1 = 0;
//     while (count1 < 3) {
//         var line = '';
//         if (count1 === 0 || count1 === 2) {
//             var count2 = 0;
//             while (count2 < (message.length + 4)) {
//                 line = line + char;
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
var getOffset = function (offset, abc, letter) {
    var count = 0;
    while (true) {
        if (letter === abc[count]) {
            if (offset < 0) {
                if (offset < (-1 * count)) {
                    var newOffset = (abc.length + (count + offset));
                    return abc[newOffset];
                }
                else {
                    return abc[count + offset];
                }
            }
            var position = (abc.length - count);
            if (offset > position) {
                var newOffset = (offset - position);
                return abc[newOffset];
            }
            else {
                return abc[count + offset];
            }        
        }
        count++;    
    }
};

var cipher = function (string, offset) {
    var lowerAbc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperAbc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var newString = '';

    for (var letter of string) {
        if (lowerAbc.includes(letter)) {
            newString = newString + getOffset(offset, lowerAbc, letter);
        }
        else if (upperAbc.includes(letter)) {
            newString = newString + getOffset(offset, upperAbc, letter);
        }
        else {
            newString = newString + letter;
        }
    }
    return newString;
};

var encrypted = cipher('Genius without education is like silver in the mine', 10);

console.log(encrypted);

var solved = cipher('Qoxsec gsdryed onemkdsyx sc vsuo csvfob sx dro wsxo', -10);

console.log(solved);
