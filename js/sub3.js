let xhr = new XMLHttpRequest();
xhr.open("GET", "sub3.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let event = JSON.parse(xhr.responseText);
    renderHTML(event);
  }
};

function renderHTML(contents) {
  let output = "";
  for (let content of contents) {
    output += `
      <h2>${content.name}</h2>
      <ul>
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
      </ul>
      <hr>
    `;
  }
  document.querySelector("#result").innerHTML = output;
}