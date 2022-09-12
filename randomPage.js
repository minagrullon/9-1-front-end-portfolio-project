const main = document.querySelector("main");

const URL = "https://poetrydb.org/random";

fetch(URL)
  .then((data) => data.json())
  .then((data) => {
    const h3 = document.createElement("h3");
    h3.innerHTML = `<u>Title:</u> ${data[0].title}`;
    main.append(h3);
    const h4 = document.createElement("h4");
    h4.innerHTML = `<u>Author:</u> ${data[0].author}`;
    main.append(h4);

    for (let i = 0; i < data[0].lines.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = data[0].lines[i];
      main.append(p);
    }
  })
  .catch((err) => console.log(err));
