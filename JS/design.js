const cards = document.querySelectorAll(".allDesigns .card");
const images = document.querySelectorAll(".allDesigns .card img");
const sample = document.querySelector(".sample");
const sampleImg = document.querySelector(".sample img");
const back = document.querySelector(".back");

for (const img of images) {
  img.addEventListener("click", (e) => {
    cards.forEach((card) => {
      card.classList.add("preview");
    });

    sample.classList.add("show");
    sampleImg.src = e.target.getAttribute("src");
  });
}

back.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("preview");
  });
  sample.classList.remove("show");
  sampleImg.src = "";
});

sampleImg.addEventListener("dblclick", () => {
  let isFullScreen = sampleImg.requestFullscreen();

  isFullScreen ? document.exitFullscreen() : sampleImg.requestFullscreen();
});
