const readline = require('readline');

function lastDigit(arg) {
    switch(Math.floor(arg)%10)
    {
    case 0: return "zero";
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    case 4: return "four";
    case 5: return "five";
    case 6: return "six";
    case 7: return "seven";
    case 8: return "eight";
    case 9: return "nine";
    }
}

function solve() {
    var rl = readline.createInterface({
                                            input:process.stdin,
                                            output:process.stdout
                                        });

    rl.on('line', function(input) {
        console.log(lastDigit(parseInt(input)));
        rl.close();
    });
}

solve();
