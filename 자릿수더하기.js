// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  n = 1234;
  return String(n)
    .split("")
    .reduce((a, b) => a + b * 1, 0);
}
console.log(solution());
