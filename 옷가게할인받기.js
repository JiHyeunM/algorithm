// 머쓱이네 옷가게는 10만 원 이상 사면 5%,
// 30만 원 이상 사면 10%,
// 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

function solution(price) {
  price = 580000;
  if (price >= 100000 && price < 300000) {
    return Math.floor(price * 0.95);
  } else if (price >= 300000 && price < 500000) {
    return Math.floor(price * 0.9);
  } else if (price >= 500000) {
    return Math.floor(price * 0.8);
  }
}
console.log(solution());
