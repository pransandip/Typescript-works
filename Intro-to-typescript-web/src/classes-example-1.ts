class User {
  email: string;
  name: string;
  readonly city: string = "calcutta"; // you can't change it with class instance
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const sandy = new User("pransandip@gmail.com", "sandy");
console.log(sandy);
