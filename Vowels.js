// let name = "satish";
// let count = 0;
// for(let str of name) {
//     if("aeiou".includes(str)) {
//         count ++;
//     }
// }
// console.log("count of vowels:" + count);


let name = "satish";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let str of name) {
    if(vowels.includes(str)) {
        count ++;
    }
}
console.log("count of vowels:" + count);

