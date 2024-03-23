'use strict';

const targetValue = Number(prompt('Enter number'));

function gettingNumber(targetValue) {
  const firstCoef = 3;
  const secondCoef = 5;

  if (
    targetValue <= 0 ||
    targetValue === NaN ||
    typeof targetValue != 'number'
  ) {
    return `Entered wrong data! Please, reload page and try again.`;
  }

  function findSolution(currentValue = 1, solution = '1') {
    if (targetValue === currentValue) {
      return `${targetValue} = ${solution}`;
    }

    if (currentValue > targetValue) {
      return null;
    }

    return (
      findSolution(currentValue * firstCoef, `(${solution} * ${firstCoef})`) ||
      findSolution(currentValue + secondCoef, `(${solution} + ${secondCoef})`)
    );
  }
  return findSolution();
}

console.log(gettingNumber(targetValue));
