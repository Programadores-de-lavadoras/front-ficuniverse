export interface Profile {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  urlPhoto: string;
}
export class User {
  id: number;
  userName: string;
  password: string;
  email: string;
  constructor() {
    this.id = 0;
    this.userName = '';
    this.email = '';
    this.password = '';

  }
}
