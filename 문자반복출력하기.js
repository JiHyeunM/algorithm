// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  my_string = "hello";
  n = 3;
  // let str = "";
  // for (let i of my_string) {
  //   console.log(i.repeat(n));
  //   str += i.repeat(n);
  // }
  // return str;
  const str = [...my_string].map((a) => a.repeat(n)).join("");
  return str;
}
console.log(solution());
