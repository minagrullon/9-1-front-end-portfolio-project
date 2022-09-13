const input = document.querySelector(".poetName");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const divMain = document.querySelector("main div");

const URL = "https://poetrydb.org/author";

fetch(URL)
  .then((data) => data.json())
  .then((data) => {
    for (let i = 0; i < data.authors.length; i++) {
      let ul = document.createElement("ul");
      divMain.append(ul);
      let li = document.createElement("li");
      li.textContent = data.authors[i];

      ul.append(li);
    }
  })
  .catch((err) => console.log(err));

form.addEventListener("submit", (e) => {});
