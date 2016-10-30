function canFormTriangle(lines) {
    var a = length(lines[0]);
    var b = length(lines[1]);
    var c = length(lines[2]);
    if(a + b <= c)
        return false;
    if(a + c <= b)
        return false;
    if(b + c <= a)
        return false;
    return true;
}

function length(line) {
    return Math.sqrt(Math.pow(line[1].x-line[0].x, 2)+
                     Math.pow(line[1].y-line[0].y, 2));
}

function createLineArray(args) {
    var lines = new Array;
    for(var i = 0; i < 3; i++)
    {
        var subArray = new Array;
        for(var j = i * 4; j < i * 4 + 4; j++)
            subArray.push(parseFloat(args[j]));
        lines.push([
           {x:subArray[0], y:subArray[1]},
           {x:subArray[2], y:subArray[3]}
        ]);
    }
    return lines;
}

function solve(args) {
    var lineArray = createLineArray(args);
    var output = "";
    for(var i = 0; i < 3; i++)
        output += length(lineArray[i]).toFixed(2) + "\n";
    output += "Triangle can "+(canFormTriangle(lineArray)?"":"not ") + "be built";
    return output;
}

console.log(solve(
                [
                  '5', '6', '7', '8',
                  '1', '2', '3', '4',
                  '9', '10', '11', '12'
                ]
                ));

console.log(solve(
                [
                  '7', '7', '2', '2',
                  '5', '6', '2', '2',
                  '95', '-14.5', '0', '-0.123'
                ]
                ));
