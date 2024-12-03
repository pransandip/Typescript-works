// private = only available within class you can make property
//           private with "private" key or "#".
// protected = will be available within the class and
//             classes which extends this class,
//             it is not accessible with class instance.

class UserExBot {
  private _courseCount = 1;
  private readonly city: string = "calcutta";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get info() {
    return { city: `${this.city}`, userId: `${this.userId}` };
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // you can't make return on setter function
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      this.deleteToken(); // private method not accessible with class instance
      throw new Error("course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const userBot = new UserExBot("pransandip@gmail.com", "sandy", "10u3xw");
console.log(userBot);
console.log(userBot.info);

userBot.courseCount = 3;
console.log(userBot.courseCount);
