// Abstract = classes are like blueprint, you can't
//            make instance from this class, you can only
//            make instances which will extends this class,
//            you can override the method of parent class.

abstract class TakeHQPhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getUpTime(): number {
    return 5;
  }
}

class Phone extends TakeHQPhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: boolean
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const imgHD: Phone = new Phone("Standard", "Neon", true);
console.log(imgHD);
console.log(imgHD.getUpTime());
