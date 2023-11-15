let tabButtons = document.querySelectorAll('.tabButton');
Array.from(tabButtons).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs = document.querySelectorAll('.tabBox');
    for (var i = 0; i < tabBoxs.length; i++) {
      tabBoxs[i].classList.remove("on");
      tabButtons[i].classList.remove("on");
    }
    tabBoxs[index].classList.add("on");
    this.classList.add("on");
  });
});
tabButtons[0].click();


function renderHTML(menu, title) { // 파라미터 1개 설정할 경우 객체로 설정되어 2개로 설정하고 빽틱으로 출력
  let output = "";
  for (let content of menu) {
    output += `
      <ul>
        <li><img src="${content.img}"></li>
        <li><h2>${content.name}</h2></li>
        <li>${content.info}</li>
        <li>${content.money}원</li>
      </ul>
    `;
  }
  document.querySelector(`.${title}`).innerHTML = output;
}

// fetch('/sub/menu2.json')                  // 1) json 파일을 읽어온다.
//   .then(response => response.json())       // 2) json 파일을 객체로 변환한다.
//   .then(ice => {                          // 3) 객체를 출력한다.  
//     renderHTML(ice, 'ice');
//   });
// fetch('/sub/menu3.json')
//   .then(response => response.json())
//   .then(dessert => {
//     renderHTML(dessert, 'dessert');
//   });
// 메뉴마다 fetch 콜링

// json을 합치면 각 메뉴는 배열안에 배열로 삽입됨.
fetch('/pp/sub/menu.json')                  // 1) json 파일을 읽어온다.
  .then(response => response.json())       // 2) json 파일을 객체로 변환한다.
  .then(json => {                          // 3) 객체를 출력한다.  
    renderHTML(json[0], 'ice');
    renderHTML(json[1], 'dessert');
    renderHTML(json[2], 'drink');
    renderHTML(json[3], 'md');
    renderHTML(json[4], 'all');
  });