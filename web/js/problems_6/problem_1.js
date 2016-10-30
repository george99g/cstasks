const readline = require('readline');

function askName() {
    var rl = readline.createInterface({
                                            input:process.stdin,
                                            output:process.stdout
                                        });

    rl.on('line', function(input) {
        console.log("Hello, " + input + "!");
        rl.close();
    });
}

askName();
