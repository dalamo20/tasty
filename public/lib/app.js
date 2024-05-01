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

//HANDLE DYNAMIC LOGIN/LOGOUT LINK
const toggleLogin = () => {
  const loginLink = document.getElementById("login");
  const logoutLink = document.getElementById("logout");

  if (authService.isAuth()) {
    if (loginLink) {
      loginLink.style.display = "none"; //hides login if user is authenticated
    }
    if (logoutLink) {
      logoutLink.style.display = "inline";
    }
  } else {
    if (loginLink) {
      loginLink.style.display = "inline";
    }
    if (logoutLink) {
      logoutLink.style.display = "none"; //hides logout if user is not authenticated
    }
  }
};
// call function on page load
window.addEventListener("load", toggleLogin);

const handleLogin = () => {
  toggleLogin();
};

handleLogin();

//this is at bottom or else login/logout link malfunctions
todoUser.init();
