let ratings = document.querySelector("#ratingbtn");
let rate = document.querySelector("#rating");

ratings.addEventListener("click", () => {
  ratings.style.display = "none";
});

for (let i of rating) {
  i.addEventListener("click", () => {
    let store = i.innerText;
    span.innerText = store;
  });
}

let submit = document.querySelector(".Submit");
let nextpage = document.querySelector(".box_2");
let hide = document.querySelector(".box_1");

submit.addEventListener("click", () => {
  nextpage.style.display = "block";
  hide.style.display = "none";
});
