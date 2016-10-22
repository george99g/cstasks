function distance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos2.x-pos1.x, 2)+
                     Math.pow(pos2.y-pos1.y, 2));
}

function isInCircle(pos, circle) {
    if(distance({x:circle.x,y:circle.y}, pos) > circle.r)
        return false;
    return true;
}

function isInRectangle(pos, rect) {
    if(pos.y > rect.y)
        return false;
    if(pos.x < rect.x)
        return false;
    if(pos.x > rect.x+rect.w)
        return false;
    if(pos.y < rect.y-rect.h)
        return false;
    return true;
}

function solve(args) {
    var rectangle = {
        y:1,
        x:-1,
        w:6,
        h:2
    };
    var circle = {
        x:1,
        y:1,
        r:1.5
    };
    var pos = {
        x:parseFloat(args[0]),
        y:parseFloat(args[1])
    };
    var returnString=isInCircle(pos, circle)?"inside":"outside";
    returnString+=" circle ";
    returnString+=isInRectangle(pos, rectangle)?"inside":"outside";
    returnString+=" rectangle";

    return returnString;
}

console.log(solve(['2.5','2']));
console.log(solve(['0','1']));
console.log(solve(['2.5','1']));
console.log(solve(['1','2']));
