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
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
  "https://example.com/image4.jpg",
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
