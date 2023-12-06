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
Array.from(mobileDepht1).forEach((eachDepht1) => {
  eachDepht1.addEventListener("click", (e) => {
    eachDepht1.querySelector(".mobile-depth2").classList.toggle("on");
    eachDepht1.querySelector(".xi-angle-down-thin").classList.toggle("on");
  });
});

const Top = document.querySelector(".top-btn")
window.addEventListener('scroll', function() {
  if (this.scrollY > 150) {
    Top.classList.add("on");
  } else {
    Top.classList.remove("on");
  }
})

Top.addEventListener('click' , function(e){
  e.preventDefault()
  window.scrollTo({top: 0, behavior: 'smooth'})
})