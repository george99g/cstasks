function distance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos2.x-pos1.x, 2)+
                     Math.pow(pos2.y-pos1.y, 2));
}

function solve(args) {
    var obj = {x:parseFloat(args[0]),y:parseFloat(args[1])};
    var dist = distance({x:0, y:0}, obj);
    if(dist <= 2)
        return "yes "+dist.toFixed(2);
    return "no "+dist.toFixed(2);
}

console.log(solve(['-2',     '0']));
console.log(solve(['-1',     '2']));
console.log(solve([ '1.5',  '-1']));
console.log(solve(['-1.5',  '-1.5']));
console.log(solve([ '100',  '-30']));
console.log(solve([ '0',     '0']));
console.log(solve([ '0.2',  '-0.8']));
console.log(solve([ '0.9',  '-1.93']));
console.log(solve([ '1',     '1.655']));
console.log(solve([ '0',     '1']));
