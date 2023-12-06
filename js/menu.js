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


function renderHTML(menu, title) {
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
fetch('/pp/sub/menu.json')
  .then(response => response.json()) 
  .then(json => {
    renderHTML(json[0], 'ice');
    renderHTML(json[1], 'dessert');
    renderHTML(json[2], 'drink');
    renderHTML(json[3], 'md');
    renderHTML(json[4], 'all');
  });