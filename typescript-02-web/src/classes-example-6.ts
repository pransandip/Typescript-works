// Abstract = classes are like blueprint, you can't
//            make instance from this class, you can only
//            make instances which will extends this class

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
}

class Twitter extends TakePhoto {}

const imgHQ: Twitter = new Twitter("Standard", "Neon");

console.log(imgHQ);
