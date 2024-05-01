const USER_API = `${BASE_API_URL}/user`; // http://localhost:3000/api/user

class TodoService {
  getUser = () => _get(USER_API, OPTIONS_WITH_AUTH);

  updateUser = (formData) =>
    _put(`${USER_API}/update`, formData, DEFAULT_OPTIONS_WITH_AUTH);
}

const todoService = new TodoService();
