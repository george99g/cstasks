function substringCount(input, sub) {
    var main = 0;
    var secondary = 0;
    var count = 0;
    while(main < input.length)
    {
        while(input[main] === sub[secondary])
        {
            if(secondary == sub.length - 1)
            {
                count++;
                secondary = -1;
            }
            secondary++;
            main++;
        }
        main++;
    }
    return count;
}

function solve(args) {
    var substring = args[0];
    var mainString = args[1];
    return substringCount(mainString, substring);
}

console.log(solve([
                      'in',
                      'We are living in an yellow submarine. We don\'t have' +
                      ' anything else. inside the submarine is very tight.' +
                      ' So we are drinking all the day. We will move out of' +
                      ' it in 5 days.'
                  ]));
