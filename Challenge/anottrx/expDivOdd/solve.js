function solution(inputArray) {
  const numArr = inputArray.filter((num) => (num * num) % 3 === 1);
  let init = 0;
  let answer = numArr.reduce((prev, cur) => prev + cur * cur, init);
  return answer;
}

exports.solution = solution;
