const gnb = document.querySelector(".gnb");
const tnb = document.querySelector(".tnb");
const gnbBg = document.querySelector("#gnb-bg");

gnb.onmouseover = () => {
  gnbBg.classList.add("on");
};
gnb.onmouseout = () => {
  gnbBg.classList.remove("on");
};
tnb.onmouseover = () => {
  gnbBg.classList.add("on");
};
tnb.onmouseout = () => {
  gnbBg.classList.remove("on");
};

const mobileBtn = document.querySelector(".mobile-btn");
const mobile = document.querySelector(".mobile-wrap");

mobileBtn.onclick = () => {
  mobile.classList.toggle("on"),
    mobileBtn.classList.toggle("rotate");
};

const mobileDepht1 = document.querySelectorAll(".mobile-depth1");
console.log(mobileDepht1);
//querySelectorAll로 잡은 대상들은 유사배열Array.from(대상)으로 가져와야 한다.
Array.from(mobileDepht1).forEach((eachDepht1) => {
  eachDepht1.addEventListener("click", (e) => {
    // e.preventDefault(); // a링크 기본기능 막기
    eachDepht1.querySelector(".mobile-depth2").classList.toggle("on");
    // 내가누른 메뉴1의 자식중에 찾아서 토글해라
    eachDepht1.querySelector(".xi-angle-down-thin").classList.toggle("on");
  });
});