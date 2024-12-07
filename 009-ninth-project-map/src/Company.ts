import { faker as f } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "green";

  constructor() {
    this.companyName = f.company.name();
    this.catchPhrase = f.company.catchPhrase();
    this.location = {
      lat: parseFloat(f.address.latitude()),
      lng: parseFloat(f.address.longitude()),
    };
  }

  markerContent(): string {
    return `
          <div>
          <h1>Company Name: ${this.companyName}</h1>
          <h3>Company Phrase: ${this.catchPhrase}</h3>
          </div>
        `;
  }
}
