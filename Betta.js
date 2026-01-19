// Betta Tabs
const bettaDesign = document.getElementById("bettaDesign");
const bettaReference = document.getElementById("bettaReference");

const bettaDesignLabel = document.getElementById("bettaDesignLabel");
const bettaReferenceLabel = document.getElementById("bettaReferenceLabel");

const bettaImg = document.getElementById("bettaImg");
const bettaImgLink = document.getElementById("bettaImgLink");

bettaDesign.addEventListener("click", function () {
  bettaDesignLabel.classList.add('active');
  bettaReferenceLabel.classList.remove('active');
  bettaImg.src = "Betta.png";
  bettaImgLink.href = "Betta.png";
});

bettaReference.addEventListener("click", function () {
  bettaReferenceLabel.classList.add('active');
  bettaDesignLabel.classList.remove('active');
  bettaImg.src = "BettaRef.png";
  bettaImgLink.href = "BettaRef.png";
});
