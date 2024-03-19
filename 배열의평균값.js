function solution(numbers) {
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
