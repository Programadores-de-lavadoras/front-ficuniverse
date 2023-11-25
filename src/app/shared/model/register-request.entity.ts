export class RegisterRequest {
  user_name: String;
  email: String;
  password: String;
  role: String;
  constructor(user_name: String, email: String, password: String, role: String) {
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
