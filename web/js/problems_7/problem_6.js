function group(people) {
    var result = new Map;
    people.forEach(function(item) {
        if(!(item.age in result))
            result[String(item.age)] = new Array;
        result[String(item.age)].push(item);
    });
    return result;
}

var people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

var groupedByAge = group(people);

console.log(groupedByAge);
