$(document).ready(function () {
  $(".flickity-gallery").flickity({
    // options
    autoPlay: true,
    cellAlign: "left",
    contain: true,
    freeScroll: true,
    wrapAround: true,
  });
});

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
    window.location.href = "home.html";
  });
};

const doLogout = function (e) {
  e.preventDefault();
};
// END OF AUTH
