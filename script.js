const viewer = document.createElement("div");
viewer.className = "viewer";
document.body.appendChild(viewer);

const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    viewer.id = "active";
    const image = document.createElement("img");
    const animal = e.target.id;
    image.src = `./images/${animal}-big.jpg`;
    image.style.height = "70vh";
    viewer.appendChild(image);
  });
});

viewer.addEventListener("click", (e) => {
  viewer.id = "none";
  viewer.innerHTML = "";
});
