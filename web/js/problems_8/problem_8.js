function solve(args) {
    return args[0].replace(/<a href="([^"]+)">([^<]+)<\/a>/g, "[$2]($1)");
}

console.log(solve([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]));
