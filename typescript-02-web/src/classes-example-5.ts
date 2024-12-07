// interface = is a must needed property, you can
//             add more then that it will not complain

interface ITakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface IStory {
  createStory: () => void;
}

class Instagram implements ITakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public version: number
  ) {}
}

class Youtube implements ITakePhoto, IStory {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public version: number
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}
