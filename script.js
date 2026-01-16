// Another Mistake Tab Logic
const AMthumbnail = document.getElementById("AMthumbnail");
const AMsingleArt = document.getElementById("AMsingleArt");
const AMoldThumbnail = document.getElementById("AMoldThumbnail");
const AMunusedSingleArt = document.getElementById("AMunusedSingleArt");

const AMthumbnailLabel = document.getElementById("AMthumbnailLabel");
const AMsingleArtLabel = document.getElementById("AMsingleArtLabel");
const AMoldThumbnailLabel = document.getElementById("AMoldThumbnailLabel");
const AMunusedSingleArtLabel = document.getElementById("AMunusedSingleArtLabel");

const AMimage = document.getElementById("AMimg");
const AMimageLink = document.getElementById("AMimgLink");

AMthumbnail.addEventListener("click", function () {
  AMthumbnailLabel.classList.add('active');
  AMsingleArtLabel.classList.remove('active');
  AMoldThumbnailLabel.classList.remove('active');
  AMunusedSingleArtLabel.classList.remove('active');
  AMimage.src = "AnotherMistake.png";
  AMimageLink.href = "AnotherMistake.png";
});

AMsingleArt.addEventListener("click", function () {
  AMsingleArtLabel.classList.add('active');
  AMthumbnailLabel.classList.remove('active');
  AMoldThumbnailLabel.classList.remove('active');
  AMunusedSingleArtLabel.classList.remove('active');
  AMimage.src = "AnotherMistakeStem.png";
  AMimageLink.href = "AnotherMistakeStem.png";
});

AMoldThumbnail.addEventListener("click", function () {
  AMoldThumbnailLabel.classList.add('active');
  AMthumbnailLabel.classList.remove('active');
  AMsingleArtLabel.classList.remove('active');
  AMunusedSingleArtLabel.classList.remove('active');
  AMimage.src = "AnotherMistakeOld.png";
  AMimageLink.href = "AnotherMistakeOld.png";
});

AMunusedSingleArt.addEventListener("click", function () {
  AMunusedSingleArtLabel.classList.add('active');
  AMthumbnailLabel.classList.remove('active');
  AMsingleArtLabel.classList.remove('active');
  AMoldThumbnailLabel.classList.remove('active');
  AMimage.src = "AnotherMistakeStemOld.png";
  AMimageLink.href = "AnotherMistakeStemOld.png";
});