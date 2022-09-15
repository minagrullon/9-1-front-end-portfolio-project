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

  fetch(`${URL}/${search}`)
    .then((data) => data.json())
    .then((data) => {
      if (data.status && data.status === 404) {
        error.style.display = "block";
        error.style.color = "red";
        return;
      }

      error.style.display = "none";

      const inputArray = search.split(" ");
      let poetTitle = "";
      for (let word of inputArray) {
        word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        console.log(word);
        poetTitle += " " + word;
      }

      h3Main.innerHTML = "";
      h3Main.style.textDecoration = "underline";
      h3Main.innerHTML = `<h3><em>${poetTitle}</em></h3>`;
      divMain.innerHTML = "";
      const poemHolder = document.createElement("div");
      divMain.prepend(poemHolder);
      data.forEach((poem) => {
        const title = document.createElement("h3");
        title.innerHTML = `<u>Title:</u> ${poem.title}`;

        const poemP = document.createElement("p");
        let poemContent = poem.lines;
        let content = "";
        poemContent.forEach((line) => {
          content += line + "\n";
        });

        console.log(content);

        poemP.innerText = content;
        poemHolder.append(title, poemP);
      });
    })
    .catch((err) => console.log(err));
});
