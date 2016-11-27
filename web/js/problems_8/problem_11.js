function stringFormat(format, ...args) {
    args.forEach(function(item, index){
       format = format.replace(new RegExp("\\{"+index+"\\}", "g"), item);
    });
    return format;
}

var str = stringFormat('Hello {0}!', 'Peter');

console.log(str);

var frmt = '{0}, {1}, {0} text {2}';
str = stringFormat(frmt, 1, 'Pesho', 'Gosho');

console.log(str);
