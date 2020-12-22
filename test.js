const wordElement = document.querySelector("#input-word");
const numberElement = document.querySelector("#input-number");
const directionElement = document.querySelector("#input-direction");
const submitElement = document.querySelector("#btn-submit");
const resultElement = document.querySelector(".result");

function handleInputWord(word, number, direction) {
  //const direction = direction.toUpperCase();
  let wordList = [...word];
  let result;

  if (-100 > number || number > 100) {
    alert("-100 <= N < 100 사이의 정수를 입력하세요.");
  }

  if ((number > 0 && direction === "R") || (number < 0 && direction === "L")) {
    for (let i = 0; i < Math.abs(number); i++) {
      let lastItem = wordList.pop();
      wordList.unshift(lastItem);
      result = wordList.join("");
    }
  } else if (
    (number < 0 && direction === "R") ||
    (number > 0 && direction === "L")
  ) {
    for (let i = 0; i < Math.abs(number); i++) {
      let firstItem = wordList.shift();
      wordList.push(firstItem);
      result = wordList.join("");
    }
  }
  return result;
}
/*---지금부터 테스트 코드 입니다----*/
function testCode() {
  const testResult = handleInputWord("apple", 3, "L");
  const expectedResult = "leapp";

  if (testResult !== expectedResult) {
    throw new Error(`${testResult} is not equal to ${expectedResult}`);
  }
}

testCode();
