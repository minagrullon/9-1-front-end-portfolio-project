const URL = "https://poetrydb.org/author";

fetch(URL)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
