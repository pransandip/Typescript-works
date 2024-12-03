// private = only available within class you can make property
//           private with "private" key or "#".

// protected = will be available within the class and
//             classes which extends this class,
//             it is not accessible with class instance.

class UserEx {
  protected _courseCount = 1;
  private readonly city: string = "calcutta";

  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  protected deleteToken() {
    // protected method not accessible with class instance
    console.log("token deleted");
  }

  get info() {
    return { city: `${this.city}`, userId: `${this.userId}` };
  }

  get courseCount(): number {
    return this._courseCount;
  }
}

/*-------- Inherits properties from parent class --------*/
class SubUser extends UserEx {
  public isFamily: boolean = true;

  changeCourseCount(courseNum: number) {
    this.deleteToken();
    this._courseCount = courseNum;
  }
}

const subUser = new SubUser(
  "pransandip.jobs@gmail.com",
  "sandy roy",
  "cal-001"
);

console.log(subUser.changeCourseCount(3));
console.log(subUser);
