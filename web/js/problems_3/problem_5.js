function solve(args){
    var a = parseFloat(args);
    if(a<0||a>9) //Why not put that in the default case in the switch?
        return "not a digit";
    switch(a)
    {
    case 0:
        return "Zero.";
    case 1:
        return "One.";
    case 2:
        return "Two.";
    case 3:
        return "Three.";
    case 4:
        return "Four.";
    case 5:
        return "Five.";
    case 6:
        return "Six.";
    case 7:
        return "Seven.";
    case 8:
        return "Eight.";
    case 9:
        return "Nine.";
    }
}

for(var i = 0; i <= 10; i++)
    console.log(solve([i.toString()]));
