// const paperImage = document.getElementById("paperImage");
// paperImage.addEventListener("click", myPlay);

// function onScreen() {
//   alert("image");
// }

// function myPlay() {
//   getElementById("paperImage");
// }
function handleImageClick(e) {
  const playImage = e.target;
  const imageContainer = document.getElementById("image-container");
  const displayedImage = document.getElementById("displayed-image");

  const imgURL = playImage.getAttribute("data-image");
  displayedImage.src = imgURL;
  imageContainer.style.display = "block"; // 왜 따옴표 붙여야 하는지
}

const playImages = document.querySelectorAll(".playImage");
playImages.forEach((playImage) => {
  playImage.addEventListener("click", handleImageClick);
});

// 이미지 컨테이너를 클릭하면 숨김
const imageContainer = document.getElementById("image-container");
imageContainer.addEventListener("click", function () {
  this.style.display = "none";
});
