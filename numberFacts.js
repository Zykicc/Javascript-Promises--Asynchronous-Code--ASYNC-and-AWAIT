let favNumber = 28;
let baseURL = "http://numbersapi.com";

async function getnum() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}

let MultipleNumbers = [2, 8, 6];
async function multNumbers() {
  let data = await $.getJSON(`${baseURL}/${MultipleNumbers}?json`);
  console.log(data);
}

// 3.
async function facts() {
  let data = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  data.forEach((data) => $("body").append(`<p>${data.text}</p>`));
}
