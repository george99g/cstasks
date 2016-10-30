const readline = require('readline');

function checkNeighbor(array, index) {
    if(index === 0 || index === array.length - 1)
        return false;
    if(array[index] > array[index - 1] &&
        array[index] > array[index + 1])
    {
        return true;
    }
    return false;
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
            var times = 0;
            array.forEach(function(item, index) {
               if(checkNeighbor(array, index))
                   times++;
            });
            console.log(times);
            rl.close();
        }
    });
}

solve();
