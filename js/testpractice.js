// //Возвращение массива всех четных чисел от start до end
// function getEvenNumbers(start, end) {
//    const arr = [];
//    for(let i = start; i <= end; i += 1){
//      if(i % 2 === 0){
//        arr.push(i);
//      }
//    }
//    return arr;
//    }
//    console.log(getEvenNumbers(2, 5));
//    console.log(getEvenNumbers(3, 11));
//    console.log(getEvenNumbers(6, 12));


// // Вывод самого длинного слова в строке
// function findLongestWord(string) {
//     // Change code below this line
//     const word = string.split(" ");
//     let longestWord = word[0];
//     for(let i = 0; i < word.length; i += 1){
//       if(word[i].length > longestWord.length){
//         longestWord = word[i];
//       }
//     }
//     return longestWord;
  
//     // Change code above this line
//   }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// // propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//    const arr = [];
//    for(const product of products){
//      if(product.hasOwnProperty(propName)){
//       arr.push(product[propName]);
//       }
//    }
//     return arr;
//     // Change code above this line
//   }

// //Вызов функций в массиве объектов
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//       for(let elem of this.potions){
//         if (elem.name === newPotion.name) {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//           }
//       }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//         if (potionName === this.potions[i].name) {
//           this.potions.splice(i, 1);
//           return `Potion ${potionName} is not in inventory!`;
//         }
//     }  
//   },

//   updatePotionName(oldName, newName) {
//     //const potionIndex = this.potions.indexOf(oldName);
//     for (let potion of this.potions) {
//         if (oldName === potion.name) {
//             //this.potions.splice(i, 1, newName);
//             potion.name = newName;
//             return `Potion ${oldName} is not in inventory!`;
//           }
//     }
//   },
// //   Change code above this line
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.potions);