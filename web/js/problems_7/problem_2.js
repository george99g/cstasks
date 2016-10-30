Array.prototype.remove = function (element) { //This is a very bad idea
    var myArray = new Array;
    this.forEach(function(item) {
       if(item !== element)
           myArray.push(item);
    });
    this.splice(0);
    for(var i = 0; i < myArray.length; i++)
        this.push(myArray[i]);
};

function arrayToString(array) {
    var output = "";
    array.forEach(function(item) {
       output += item + "\n";
    });
    return output;
}

function solve(args) {
    args.remove(args[0])
    return arrayToString(args);
}


console.log(solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]));
console.log(solve(
                [
                  '_h/_',
                  '^54F#',
                  'V',
                  '^54F#',
                  'Z285',
                  'kv?tc`',
                  '^54F#',
                  '_h/_',
                  'Z285',
                  '_h/_',
                  'kv?tc`',
                  'Z285',
                  '^54F#',
                  'Z285',
                  'Z285',
                  '_h/_',
                  '^54F#',
                  'kv?tc`',
                  'kv?tc`',
                  'Z285'
                ]));
