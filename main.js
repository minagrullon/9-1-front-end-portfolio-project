const input = document.querySelector(".poetName");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const divMain = document.querySelector("main div");
const h3Main = document.querySelector(".filler");
const error = document.querySelector(".error");

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let search = input.value;
  console.log(search);
  fetch(`${URL}/${search}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      if (data.status && data.status === 404) {
        error.style.display = "block";
        error.style.color = "red";
        error.style.fontWeight = "700";
        return;
      }

      h3Main.innerHTML = "";
      h3Main.innerHTML = `<h2>${search}</h2>`;
      divMain.innerHTML = "";
      const poemHolder = document.createElement("div");
      divMain.prepend(poemHolder);
      data.forEach((poem) => {
        const title = document.createElement("h3");
        title.innerHTML = `<u>Title:</u> ${poem.title}`;

        const poemP = document.createElement("p");
        poemP.textContent = poem.lines;
        poemHolder.append(title, poemP);
      });
    })
    .catch((err) => console.log(err));
});
