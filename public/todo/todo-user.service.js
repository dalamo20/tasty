class ToDoUser {
  todoService;

  constructor(todoService) {
    this.todoService = todoService;
  }

  init() {
    this.renderUserInfo();
  }

  renderUserInfo = async () => {
    try {
      const userData = await this.todoService.getUser();
      const user = userData[0];
      // console.log("THIS IS USER DATA: ", user);

      document.getElementById("userName").textContent = user.username;
      document.getElementById("email").textContent = user.email;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  updateUser = async (newUser) => {
    try {
      await this.todoService.updateUser(newUser);
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Unable to update user. Please try again later.");
    }
  };

  _updateUserEventHandler = async () => {
    const newUsername = document.getElementById("newUsername").value;
    const newEmail = document.getElementById("newEmail").value;
    const newPassword = document.getElementById("newPassword").value;

    if (!newUsername && !newEmail && !newPassword) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await this.todoService.updateUser({
        username: newUsername,
        email: newEmail,
        password: newPassword,
      });
      //this updates the UI w/o having to refresh page
      await this.renderUserInfo();
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };
}

const todoUser = new ToDoUser(todoService);
