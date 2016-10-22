function numToWord(number) {
    switch(number)
    {
    case 0:
        return "zero";
    case 1:
        return "one";
    case 2:
        return "two";
    case 3:
        return "three";
    case 4:
        return "four";
    case 5:
        return "five";
    case 6:
        return "six";
    case 7:
        return "seven";
    case 8:
        return "eight";
    case 9:
        return "nine";
    case 10:
        return "ten";
    case 11:
        return "eleven";
    case 12:
        return "twelve";
    case 13:
        return "thirteen";
    case 14:
        return "fourteen";
    case 15:
        return "fifteen";
    case 16:
        return "sixteen";
    case 17:
        return "seventeen";
    case 18:
        return "eighteen";
    case 19:
        return "nineteen";
    case 20:
        return "twenty";
    case 30:
        return "thirty";
    case 40:
        return "fourty";
    case 50:
        return "fifty";
    case 60:
        return "sixty";
    case 70:
        return "seventy";
    case 80:
        return "eighty";
    case 90:
        return "ninety";
    }
    if(number > 20 && number < 100)
        return numToWord(Math.floor(number/10)*10)+" "+
                numToWord(Math.floor(number%10));
    if(number >= 100 && Math.floor(number%100) != 0)
        return numToWord(Math.floor(number/100))+" hundred and "+
                numToWord(Math.floor(number%100));
    if(number >= 100)
        return numToWord(Math.floor(number/100))+" hundred";
}

function solve(args) {
    var sentence = numToWord(parseInt(args[0]));
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    return sentence;
}

console.log(solve(['0']));
console.log(solve(['9']));
console.log(solve(['10']));
console.log(solve(['12']));
console.log(solve(['19']));
console.log(solve(['25']));
console.log(solve(['98']));
console.log(solve(['273']));
console.log(solve(['400']));
console.log(solve(['501']));
console.log(solve(['617']));
console.log(solve(['711']));
console.log(solve(['999']));
