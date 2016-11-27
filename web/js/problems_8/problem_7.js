function getResource(input) {
    var noProtocol = input.substring(input.indexOf(":") + 3);
    return noProtocol.substring(noProtocol.indexOf("/"));
}

function getServer(input) {
    var noProtocol = input.substring(input.indexOf(":") + 3);
    return noProtocol.substring(0, noProtocol.indexOf("/"));
}

function getProtocol(input) {
    return input.substring(0, input.indexOf(":"));
}

function solve(args) {
    var outputString = "protocol: ";
    outputString += getProtocol(args[0]);
    outputString += "\nserver: " + getServer(args[0]);
    outputString += "\nresource: " + getResource(args[0]);
    return outputString;
}

console.log(solve(['http://telerikacademy.com/Courses/Courses/Details/239']));
