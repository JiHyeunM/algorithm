// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  n = 20;
  console.time();
  // let ans = 0;
  // for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  // const s = Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
  // return s;

  const sum = [];
  for (i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum.push(i);
  }
  console.timeEnd();
  return sum.length + 1;
}
console.log(solution());
