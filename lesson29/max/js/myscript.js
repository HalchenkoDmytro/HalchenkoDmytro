function Fraction(numNumber, denomNumber){//numNumber <=> numinator Number
  return {numNumber: numNumber,  denomNumber: denomNumber};
}
const firstNumber = Fraction(4, 24);
const secondNumber = Fraction(2, 15);

const getEucl = (a, b) => ((a % b) ? getEucl(b, a % b) : Math.abs(b));

const normal = (n1, n2) => {
  const numerFraction = getEucl(n1, n2);
  const numerFraction1 = n1 / numerFraction;
  const numerFraction2 = n2 / numerFraction;
  return `${numerFraction1} / ${numerFraction2}`;
};


function multiFraction(obj1, obj2){
  const resultNumNumber = obj1.numNumber * obj2.numNumber;
  const resultDenomNumber = obj1.denomNumber * obj2.denomNumber;
  return (`${obj1.numNumber} / ${obj1.denomNumber} * ${obj2.numNumber} / ${obj2.denomNumber} = ` +
  `${resultNumNumber}/${resultDenomNumber} = ${normal(resultNumNumber, resultDenomNumber)};`);
}

function addFraction(obj1, obj2){
  const resultNumNumber = obj1.numNumber * obj2.denomNumber + obj2.numNumber*obj1.denomNumber;
  const resultDenomNumber = obj1.denomNumber * obj2.denomNumber;
  return (`${obj1.numNumber} / ${obj1.denomNumber} + ${obj2.numNumber} / ${obj2.denomNumber} = ` +
  `${resultNumNumber}/${resultDenomNumber} = ${normal(resultNumNumber, resultDenomNumber)};`);
}

function subFraction(obj1, obj2){
  const resultNumNumber = obj1.numNumber * obj2.denomNumber - obj2.numNumber*obj1.denomNumber;
  const resultDenomNumber = obj1.denomNumber * obj2.denomNumber;
  return (`${obj1.numNumber} / ${obj1.denomNumber} - ${obj2.numNumber} / ${obj2.denomNumber} = ` +
  `${resultNumNumber}/${resultDenomNumber} = ${normal(resultNumNumber, resultDenomNumber)};`);
}

function divFraction(obj1, obj2){
  const resultNumNumber = obj1.numNumber * obj2.denomNumber;
  const resultDenomNumber = obj1.denomNumber * obj2.numNumber;
  return (`(${obj1.numNumber} / ${obj1.denomNumber}) / (${obj2.numNumber} / ${obj2.denomNumber}) = ` +
  `${resultNumNumber}/${resultDenomNumber} = ${normal(resultNumNumber, resultDenomNumber)};`);
}

console.log(`  ${addFraction(firstNumber, secondNumber)}`);
console.log(`  ${subFraction(firstNumber, secondNumber)}`);
console.log(`  ${multiFraction(firstNumber, secondNumber)}`);
console.log(`  ${divFraction(firstNumber, secondNumber)}`);
