//thumbnail pics are in gallery, select to add listener
const gallery = document.querySelector(".gallery");

//create array for preloading large images from thumbnails
const thumbnailImages = gallery.querySelectorAll(".gallery img");
const largeImages = [];

//for each thumbnail add large version to its array
for (let i = 0; i < thumbnailImages.length; i++) {
  const largeImage = new Image();
  largeImage.src = thumbnailImages[i].src;
  largeImages.push(largeImage);
}

//viewer is visible when image is clicked
const viewer = document.querySelector(".viewer");
const selectedImage = document.querySelector("#selected-image");
const back = document.querySelector(".back");
const next = document.querySelector(".next");
const exit = document.querySelector(".exit");
let currentImageIndex = 0;

//when any thumbnail clicked, open viewer, show big image
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    selectedImage.src = e.target.src.replace("small", "big");
    viewer.id = "active";
    viewer.appendChild(selectedImage);
    currentImageIndex = [...thumbnailImages].indexOf(e.target);
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
