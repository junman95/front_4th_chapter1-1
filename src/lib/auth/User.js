//로컬 스토리지 통해 관리하므로 static 메소드로 구현
class User {
  static getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  static setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  };

  static clearUser = () => {
    localStorage.removeItem("user");
  };
}

export default User;
