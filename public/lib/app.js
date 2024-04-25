//THIS IS WHERE THE INIT GOES
// todo.init();

// COOKING REELS CAROUSEL
const reelContainers = [...document.querySelectorAll(".reel-container")];
const nxtBtn = [...document.querySelectorAll(".next")];
const preBtn = [...document.querySelectorAll(".previous")];

reelContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
