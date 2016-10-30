function youngest(people) {
    var min = people[0];
    for(var i = 1; i < people.length; i++)
        if(people[i].age < min.age)
            min = people[i];
    return min.firstname + " " + min.lastname;
}

function solve(args) {
    var people = new Array;
    for(var i = 0; i < args.length/3; i++)
        people.push({
                        firstname: args[i*3],
                        lastname: args[i*3+1],
                        age: parseInt(args[i*3+2])
                    });
    return youngest(people);
}

console.log(solve(
                    [
                      'Gosho', 'Petrov', '32',
                      'Bay', 'Ivan', '81',
                      'John', 'Doe', '42'
                    ]
                ));

console.log(solve(
                    [
                      'Penka', 'Hristova', '61',
                      'System', 'Failiure', '88',
                      'Bat', 'Man', '16',
                      'Malko', 'Kote', '72'
                    ]
                ));
