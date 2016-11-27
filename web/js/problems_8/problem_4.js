var processTable = {
    "upcase":function(input) {
        return input.toUpperCase();
    },
    "orgcase":function(input) {
        return input;
    },
    "lowcase":function(input) {
        return input.toLowerCase();
    }
}

function parse(tokenArray) {
    var stack = new Array;
    var outputQueue = "";
    for(var i = 0; i < tokenArray.length; i++)
    {
        if(tokenArray[i].type === "text")
            stack.push(tokenArray[i]);
        else
        {
            if(tokenArray[i].endtag)
            {
                var toProcess = new Array;
                while(true)
                {
                    var currentToken = stack.pop();
                    if(currentToken.type === "tag" &&
                       currentToken.tagtext === tokenArray[i].tagtext)
                    {
                       break;
                    }
                    toProcess.push(currentToken);
                }
                toProcess.forEach(function(item)
                {
                   if(item.type === "text")
                       stack.push({type:"text", text:processTable[tokenArray[i].tagtext](item.text)});
                });
            }
            else
                stack.push(tokenArray[i]);
        }
    }
    stack.forEach(function(item) {
       if(item.type === "text")
           outputQueue += item.text;
    });
    return outputQueue;
}


function lex(input, tagType) {
    var output = new Array;
    var currentString = "";
    for(var i = 0; i < input.length; i++)
    {
        if(input[i] === tagType[0])
        {
            output.push({type:"text", text:currentString});
            currentString = "";
            var tagString = input.substring(i + 1, input.indexOf(tagType[1], i + 1));
            if(tagString[0] === '/')
                output.push({type:"tag", endtag:true, tagtext:tagString.substr(1)});
            else
                output.push({type:"tag", endtag:false, tagtext:tagString});
            i = input.indexOf(tagType[1], i + 1);
            continue;
        }
        else if(i === input.length - 1)
            output.push({type:"text", text:currentString});
        currentString += input[i];
    }
    return output;
}

function solve(args) {
    return parse(lex(args[0], '<>'));
}

console.log(solve(['We are <orgcase>liViNg</orgcase> <lowcase><upcase>iN</upcase></lowcase> a <upcase>yellow sUBmarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>ANYthing</lowcase> else.']));
