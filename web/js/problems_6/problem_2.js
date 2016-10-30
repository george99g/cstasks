const readline = require('readline');

function GetMax(arg1, arg2) {
    if(arg1 > arg2)
        return arg1;
    return arg2;
}

function solve() {
    var rl = readline.createInterface({
                                            input:process.stdin,
                                            output:process.stdout
                                        });

    rl.on('line', function(input) {
        var numbers = input.split(" ");
        numbers.forEach(function(item, index) {
           numbers[index] = parseInt(item);
        });
        console.log(GetMax(GetMax(numbers[0], numbers[1]), numbers[2]));
        rl.close();
    });
}

solve();
