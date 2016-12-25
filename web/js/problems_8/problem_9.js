function extractEmails(input) {
    return input.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/gi);
}

console.log(extractEmails("test@test.test test2@test2.test2\ntest3@test3.test3 test4@test4.test4"));
