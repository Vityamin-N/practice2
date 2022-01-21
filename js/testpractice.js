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