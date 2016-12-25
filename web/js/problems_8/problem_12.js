function generateList(people, template) {
    var outputString = "<ul>";
    var props = new Array;
    var regex = /-\{([^\}]+)\}-/gi;
    var match = regex.exec(template);
    while(match != null) {
        props.push(match[1]);
        match = regex.exec(template);
    }
    console.log(template);
    console.log(props);
    people.forEach(function(item) {
        outputString += "<li>";
        var newTemplate = template;
        props.forEach(function(propertyItem) {
            newTemplate =
            newTemplate.replace(new RegExp("-\\{" + propertyItem + "\\}-", "g"),
                                item[propertyItem]);
        });
        outputString += newTemplate;
        outputString += "</li>";
    });
    outputString += "</ul>";
    return outputString;
}

var people = [{name: 'Peter', age: 14},{name: 'Simon', age: 15},{name:'Carol', age: 16}];
var template = "<strong>-{name}-</strong> <span>-{age}-</span>";
var peopleList = generateList(people, template);

console.log(peopleList);
