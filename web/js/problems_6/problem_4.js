const readline = require('readline');

function times(array, item) {
    var times = 0;
    array.forEach(function(arrItem) {
       if(arrItem === item)
           times++;
    });
    return times;
}

function solve() {
    var rl = readline.createInterface({
                                            input:process.stdin,
                                            output:process.stdout
                                        });
    var line = 0;
    var array = new Array;
    rl.on('line', function(input) {
        line++;
        if(line == 2)
        {
            var stringArray = input.split(" ");
            stringArray.forEach(function(item) {
               array.push(parseInt(item));
            });
        }
        if(line >= 3)
        {
            console.log(times(array, parseInt(input)));
            rl.close();
        }
    });
}

solve();
