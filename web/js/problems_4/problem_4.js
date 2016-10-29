function main() {
    var keys = Object.keys(window)
                    .concat(Object.keys(navigator))
                    .concat(Object.keys(window));
    keys = keys.sort();
    console.debug([keys[0], keys[keys.length - 1]]);
}
