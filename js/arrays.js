// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// const bPart = b.splice(1);
// console.log(bPart);
// console.log(b);
// const result = a.concat(c, b, bPart[0]);
// console.log(result);
// // Result: ["a", "b", "c", 0, 1, 2, 3];

// let result1 = a.slice();
// result1.push(c);
// result1.push(b[0]);
// result1 = result1.concat(b[1]);
// console.log(result1);


// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const b = a.splice(3, 3, "a", "b", "c");
// console.log(a);
// // Result: ["a", "b", "c", "a", "b", "c", "g", "h"];


// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const b = a.splice(5, 3, "0", "0", "0");
// console.log(a);
// // Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];


// const a = [1, 2, [3, 4], [5, 6], 7];
// // let result = [];
// // for (const i of a){
// //     if(Array.isArray(i)){
// //         result.push(i[0], i[1]);
// //     } else{ result.push(i);}
// // }
// // console.log(result);

//     const result = a.flat();
//     console.log(result);
// // Result: [1, 2, 3, 4, 5, 6, 7]


const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];
// let result;
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] === "n") {
//     result = i;
//   }
// }
const result = a.lastIndexOf('n');
console.log('index last "n": ', result);
// Result: найти индекс, на котором последний раз встречается буква n