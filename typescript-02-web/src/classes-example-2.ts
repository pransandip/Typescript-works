// private = only available within class you can make property
//           private with "private" key or "#".
// protected = will be available within the class and
//             classes which extends this class.

class Users {
  public email: string;
  public name: string;
  // you can't access "city" property with class
  // instance, it is only accessible within class
  private readonly city: string = "calcutta";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.city = this.city;
  }

  get showMyCity() {
    return this.city;
  }
}

const user = new Users("pransandip@gmail.com", "sandy");
console.log(user); // you can't access "city" property with class instance
console.log(user.showMyCity);
