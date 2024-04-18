type User = string;

class UserDatabase {
  constructor(private users: Array<User>) {}

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  removeUser(user: User) {
    const target = this.users.indexOf(user);
    if (target != -1) {
      this.users.splice(target, 1);
    }
  }
}

class UserDatabase2 {
  constructor(private users: Array<User>) {}

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  removeUser(user: User) {
    const target = this.users.indexOf(user);
    if (target != -1) {
      this.users.splice(target, 1);
    }
  }

  printUserReport() {
    console.log(this.users.join(", "));
  }
}

const badUserDatabase = new UserDatabase2([]);
badUserDatabase.addUser("Alice");
badUserDatabase.addUser("Bob");
badUserDatabase.addUser("Charlie");
badUserDatabase.removeUser("Bob");
badUserDatabase.printUserReport();
