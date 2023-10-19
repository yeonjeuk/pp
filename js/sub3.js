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
        <li>
          <h4></h4>
          <p></p>
        </li>
      <hr>
    `;
  }
  document.querySelector(".franchise-wrap").innerHTML = output;
}