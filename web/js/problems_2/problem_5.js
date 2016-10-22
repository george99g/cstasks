function solve(args) {
    return args[0]>>2&1==1;
}


console.log(solve(['15']));  //0b00000001111
console.log(solve(['11']))   //0b00000001011
console.log(solve(['1024']));//0b10000000000
console.log(solve(['4']));   //0b00000000100
