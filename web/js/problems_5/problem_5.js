function argsToArr(args) {
    var arr = new Array(args.length - 1);
    for(var i = 1; i < args.length; i++)
        arr[i - 1] = parseInt(args[i]);
    return arr;
}

function sort(array) {
    for(var i = 0; i < array.length; i++)
    {
        var min = array[i];
        var minIndex = i;
        for(var j = i + 1; j < array.length; j++)
        {
            if(array[j] < min)
            {
                min = array[j];
                minIndex = j;
            }
        }
        if(minIndex != i)
        {
            var swp = array[i];
            array[i] = min;
            array[minIndex] = swp;
        }
    }
    return array;
}

function arrToString(array) {
    var output = "";
    array.forEach(function(item) {
       output += item + "\n";
    });
    return output;
}

function solve(args) {
    var arr = argsToArr(args);
    arr = sort(arr);
    return arrToString(arr);
}

console.log(solve(['6', '3', '4', '1', '5', '2', '6']));
console.log(solve(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']));
