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

const imgArray = new Array();
imgArray[0] = "/img/paper.png";
imgArray[1] = "/img/rock.png";
imgArray[2] = "/img/scissors.png";

function showImage() {
  var imgNum = Math.round(Math.random() * 2);
  var objImg = document.getElementById("introimg");
  objImg.src = imgArray[imgNum];
  setTimeout(showImage, 500);
}

// const imageSources = ["/img/paper.png", "/img/rock.png", "/img/scissors.png"];
// let imageElement = document.getElementById("imageElement");
// function changeImage() {
//   currentImageIndex = (currentImageIndex + 1) % imageSources.length;
//   imageElement.src = imageSources[currentImageIndex];
// }
// setInterval(changeImage, 1000);
