let a = 1;              //1
console.log(`a: ${a}`)

let b = 2;              //2
console.log(`b: ${b}`)

let c = a++;            //1
console.log(`c: ${c}`)

let d = ++c;            //2
console.log(`d: ${d}`)

let e = ++d + d++ + d;  //10
console.log(`e: ${e}`)
