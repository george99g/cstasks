const readline = require('readline');

function sort(array, ascending) {
    for(var i = 0; i < array.length - 1; i++)
    {
        var swp = array[i];
        var result = maxInArrayAfter(i, array);
        array[i] = result.max;
        array[result.index] = swp;
    }
    if(ascending)
        array = array.reverse();
    return array;
}

function maxInArrayAfter(index, array) {
    var max = array[index];
    var indx = index;
    for(var i = index + 1; i < array.length; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
            indx = i;
        }
    }
    return {max: max, index: indx};
}

function arrayToString(array) {
    var string = array[0];
    array.forEach(function(item, index) {
       if(index === 0)
           return;
       string += " " + item;
    });
    return string;
}

function solve() {
    var rl = readline.createInterface({
                                            input:process.stdin,
                                            output:process.stdout
                                        });
    var line = 0;
    rl.on('line', function(input) {
        line++;
        if(line >= 2)
        {
            var array = input.split(" ");
            array.forEach(function(item, index) {
               array[index] = parseInt(item);
            });
            console.log(arrayToString(sort(array, true)));
            rl.close();
        }
    });
}

solve();
