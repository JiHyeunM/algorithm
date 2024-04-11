// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
  s1 = ["a", "b", "c"];
  s2 = ["com", "b", "d", "p", "c"];
  // const sum = [];
  // for (i = 0; i <= s2.length; i++) {
  //   console.log(s2.length, "길이다");
  //   console.log(i, "아이다");
  //   if (s1[i] === s2[i]) sum.push(i);
  // }
  // return sum.length;

  return s1.filter((a) => s2.includes(a)).length;
}
console.log(solution());
