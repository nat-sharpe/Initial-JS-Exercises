var caseConvert = function (str, conversionType) {
    var convertedStr = str.toLowerCase();
    if (conversionType === 'snake') {
        convertedStr = convertedStr.replace(/ /gi , '_');
    }
    else {
        convertedStr = convertedStr.replace(/ /gi , '');
    }

    return convertedStr;
};

var phrase = 'Test caSe worDs';

console.assert(caseConvert(phrase).includes(' ') === false, 'message should have no spaces');
console.assert(caseConvert(phrase)[0] === caseConvert(phrase)[0].toLowerCase(), 'first letter should be lowercase');
console.assert(caseConvert(phrase, 'snake').replace(/ /gi , '_') === true, 'all spaces hould be underscores');



// var convertedStr = '';
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             convertedStr += str[i];
//         }
//     }