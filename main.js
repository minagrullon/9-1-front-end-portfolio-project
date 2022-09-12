const input = document.querySelector(".poetName");
const container = document.querySelector(".container");
const ul = document.querySelector("ul");

const URL = "https://poetrydb.org/author";

fetch(URL)
  .then((data) => data.json())
  .then((data) => {
    for (let i = 0; i < data.authors.length; i++) {
      console.log(data.authors);
      let li = document.createElement("li");
      li.textContent = data.authors[i];
      console.log(li);
      ul.append(li);
    }
  })
  .catch((err) => console.log("ERROR"));
