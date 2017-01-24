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

//xax, Nice. Yet we are learning WEB not node.js
//so this is the web alternative: 
function sayHello() { 
	var person = prompt("Please enter your name", "");

	if (person != null) { 
		console.log("Hello, " + person + "!");
	}
}
//in all fairness, the way the task is written SCREAMS that the telerik team did not read it through and
//copied a task that is from C#, because writing a testing method is quite more advanced than what we have
//covered (when we talk about javascript) + it says "on the first line" - which is ... what line? in js? 
//Anyway... 
