const viewer = document.querySelector(".viewer");
const exit = document.querySelector(".exit");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

let image = document.createElement("img");

const images = document.querySelectorAll(".animal");
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    viewer.id = "active";
    let animal = e.target.id;
    image.src = `./images/${img.id}-big.jpg`;
    back.src = `./images/arrowback.png`;
    next.src = `./images/arrownext.png`;
    image.style.height = "80vh";
    image.style.Maxwidth = "60vw";
    image.style.border = "15px solid black";
    viewer.appendChild(image);
  });
});

exit.addEventListener("click", () => {
  viewer.id = "none";
  image.remove();
});
