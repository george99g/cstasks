const readline = require('readline');

function firstLarger(array) {
    var candidate = -1;
    for(var i = 0; i < array.length; i++)
    {
       if(i === 0 || i === array.length - 1)
           continue;
       if(array[i] > array[i - 1] && array[i] > array[i + 1])
       {
           candidate = i;
           break;
       }
    }
    return candidate;
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
            console.log(firstLarger(array));
            rl.close();
        }
    });
}

solve();
