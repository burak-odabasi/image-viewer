//thumbnail pics are in gallery, select to add listener
const gallery = document.querySelector(".gallery");

//viewer is visible when image is clicked
const viewer = document.querySelector(".viewer");
const selectedImage = document.querySelector("#selected-image");
const back = document.querySelector(".back");
const next = document.querySelector(".next");
const exit = document.querySelector(".exit");

//when any thumbnail clicked, open viewer, show big image
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    selectedImage.src = e.target.src.replace("small", "big");
    viewer.id = "active";
    viewer.appendChild(selectedImage);
  }
});

//remove big image, close viewer div
exit.addEventListener("click", () => {
  viewer.id = "none";
  selectedImage.remove();
});

//show prev image
back.addEventListener("click", () => {
  selectedImage.src = "";
});
//show next image
next.addEventListener("click", () => {
  selectedImage.src = "";
});
