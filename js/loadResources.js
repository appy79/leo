const base = new URL("./..").href;

async function getJSON(requestURL) {
  // const request = new Request("./../config.json");
  // console.log(request);
  // const response = await fetch(request);
  // const jsonData = await response.json();

  data = fetch("config.json")
  .then(response => response.json())
  .then(json => console.log(json));
  console.log(data);
  return data;
}

export {getJSON};