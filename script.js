const viewer = document.createElement("div");
viewer.className = "viewer";
document.body.appendChild(viewer);

const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    viewer.id = "active";
    const image = document.createElement("img");
    image.src = img.src;
    viewer.appendChild(image);
  });
});
