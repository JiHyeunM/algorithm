// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중
// 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  numbers = [1, 2, 3, 4, 5];
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a * b);

  // numbers 배열에서 가장 큰 수를 추출 (max)
  // numbers 배열을 순회하며 max 가 아닌 값 중 가장 큰 수를 추출
  // const max1 = Math.max.apply(null, numbers);
  // const max2 = numbers.reduce((a, c) => {
  //   if (c != max1) {
  //     a = Math.max(a, c);
  //   }
  //   return a;
  // }, 0);
  // return max1 * max2;
}
console.log(solution());
