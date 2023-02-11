class RandomImageGenerator {
  private readonly images: string[];

  constructor(images: string[]) {
    this.images = images;
  }

  public getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
}

const generator = new RandomImageGenerator([
  "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
  "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
  "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
  "https://github.com/pransandip/pransandip/blob/main/logos/numpy_github.png?raw=true",
]);

const imageContainer = document.getElementById(
  "image-container"
) as HTMLDivElement;

function updateImage() {
  const randomImage = generator.getRandomImage();
  const imageElement = document.createElement("img");
  imageElement.src = randomImage;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imageElement);
}

setInterval(updateImage, 1000);
