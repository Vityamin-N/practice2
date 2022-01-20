//Create reverse without array methods
// const param = -12345;
// function reverseNumber(param){
// // Преобразование числа в строку
// const paramStr = param.toString();

// console.log(param);
// console.log(paramStr);

// const arrParam = paramStr.split('');
// const reverseArr = [];
// if(arrParam[0] === '-'){
//     for(let i = arrParam.length-1; i >= 1; i -=1){
//         reverseArr.push(arrParam[i]);
//         console.log(reverseArr);
//     }
// }
// }
//console.log(arrParam);
function reverses(stt) {
    if (stt < 0) {
      stt *= -1;
    }
    stt = String(stt);
    let res = "";
    for (let i = stt.length; i >= 1; i -= 1) {
      res += String(i);
    }
    return Number(res);
  }
  
  console.log(reverses(12345));
  
