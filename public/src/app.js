// AUTH
const doLogin = function (e) {
  e.preventDefault();
  const username = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;

  login({
    username: username,
    password: password,
  }).then(function (res) {
    window.location.href = "index.html";
  });
};

const doRegister = function (e) {
  e.preventDefault();
  const username = document.getElementById("uname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("psw").value;

  register({
    username: username,
    email: email,
    password: password,
  }).then(function (res) {
    window.location.href = "login.html";
  });
};

const doLogout = function (e) {
  e.preventDefault();
};
// END OF AUTH

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
