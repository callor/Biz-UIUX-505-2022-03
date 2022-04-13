// 현재 화면의 모든 요소들이 다 그려지면, 완성되면
// js 코드를 시작하겠다 라는 의미
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const headerFake = document.querySelector("header.fake");
  const section = document.querySelector("section");

  // 화면의 스크롤이 발생하면 실행하기
  document.addEventListener("scroll", () => {
    const windowTop = window.scrollY;
    if (windowTop > 150) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
