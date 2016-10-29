function min(arg) {
    var min = arg[0];
    arg.forEach(function(item) {
        if(item < min)
            min = item;
    });
    return min;
}

function max(arg) {
    var max = arg[0];
    arg.forEach(function(item) {
        if(item > max)
            max = item;
    });
    return max;
}

function sum(arg) {
    var sum = 0;
    arg.forEach(function(item) {
        sum += item;
    });
    return sum;
}

function avg(arg) {
    return sum(arg)/arg.length;
}

function solve(args) {
    var arr = new Array;
    args.forEach(function(item) {
       arr.push(parseFloat(item));
    });
    var returnString = "min=" + min(arr).toFixed(2) + "\n";
    returnString += "max=" + max(arr).toFixed(2) + "\n";
    returnString += "sum=" + sum(arr).toFixed(2) + "\n";
    returnString += "avg=" + avg(arr).toFixed(2);
    return returnString;
}

console.log(solve(['2', '5', '1']));
console.log(solve(['2', '-1', '4']));
