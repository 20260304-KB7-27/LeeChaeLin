function foodReport(name, age, ...rest) {
  console.log(`${name}, ${age}`);
  console.log(rest);
}
foodReport('이몽룡', 20, '짜장면', '냉면', '불고기');
foodReport('홍길동', 16, '초밥');
