(() => {
  if (!authService.isAuth() || authService.isTokenExpired()) {
    alert("Log in to view this page.");
    authService.logout();
  }
})();
