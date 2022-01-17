const price = prompt("Please enter the sum!");
const formatedPrice = Number.parseFloat(price);
console.log("Check sum: ", formatedPrice);

const tip = prompt("Please enter tip percent!");
const formatedTip = Number.parseFloat(tip);
console.log("Tip: ", formatedTip, "%");

const tipAmount = ((formatedPrice/100)*formatedTip).toFixed(2);
const formatedTipAmount = Number.parseFloat(tipAmount);
console.log("Tip amount: ", formatedTipAmount);

const totalSum = formatedPrice+formatedTipAmount;
const formatedTotalSum = Number.parseFloat(totalSum);
console.log("Total sum to pay: ", formatedTotalSum);