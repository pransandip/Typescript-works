// Interfaces: Creates a ne type, describing the
// property names and value types of an object

const Alto = {
  cName: "Maruti",
  year: 2000,
  broken: true,
};

function printVehicle(vehicle: {
  cName: string;
  year: number;
  broken: boolean;
}): void {
  console.log(vehicle.cName);
  console.log(vehicle.year);
  console.log(vehicle.broken);
}

printVehicle(Alto);

/*---------BREAK-----------*/
interface Vehicle {
  cName: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const Alto1 = {
  cName: "Maruti",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.cName}, status: ${this.broken}`;
  },
};
function printVehicle2(vehicle: Vehicle): void {
  console.log(vehicle.cName);
  console.log(vehicle.year);
  console.log(vehicle.broken);
  console.log(vehicle.summary());
}
printVehicle2(Alto1);
