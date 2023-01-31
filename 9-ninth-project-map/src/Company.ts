import { faker as f } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = f.company.name();
    this.catchPhrase = f.company.catchPhrase();
    this.location = {
      lat: parseFloat(f.address.latitude()),
      lng: parseFloat(f.address.longitude()),
    };
  }
}
