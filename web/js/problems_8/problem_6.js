function lex(input) {
    var output = "";
    var currentString = "";
    for(var i = 0; i < input.length; i++)
    {
        if(input[i] === '<')
        {
            output += currentString.trim();
            currentString = "";
            i = input.indexOf('>', i + 1);
            continue;
        }
        else if(i === input.length - 1)
            output += currentString;
        currentString += input[i];
    }
    return output;
}

function joinargs(args) {
    var output = "";
    args.forEach(function(item){
        output += item;
    });
    return output;
}

function solve(args) {
    return lex(joinargs(args));
}

console.log(solve(
                [
                    '<html>',
                    '  <head>',
                    '    <title>Sample site</title>',
                    '  </head>',
                    '  <body>',
                    '    <div>text',
                    '      <div>more text</div>',
                    '      and more...',
                    '    </div>',
                    '    in body',
                    '  </body>',
                    '</html>'
                ]
                ));
