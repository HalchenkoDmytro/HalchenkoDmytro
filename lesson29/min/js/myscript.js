const currentAmountFuel = 35;
const roadLength = 740;

let car = {
  manufacturer: 'Audi',
  model: 'A4',
  year: 2008,
  averageSpeed: 80,
  fuelTank: 64,
  averageFuel: 7.1,
  driver: 'Alex',
  
  info: function() {
    console.log(`${this.manufacturer} ${this.model}, ${this.year}, driver : ${this.driver}`);
    console.log(`
    Specifications: 
    average speed: ${this.averageSpeed} km/h,
    fuel tank capacity: ${this.fuelTank} liter,
    average fuel consumption: ${this.averageFuel} liter per 100 km    
    `);
  },

  addDriver: function (newDriver) {
    this.driver = newDriver;
  },
};

let fuelConsumption = (road, fuel) => {
  let fuelCon = road * fuel / 100;
  if (fuelCon < currentAmountFuel) {
    return (`In fuel tank ${currentAmountFuel}! Fuel consumption: ${fuelCon}! Ok, enough fuel`)
  } else {
    return (`In fuel tank ${currentAmountFuel}! Fuel consumption: ${fuelCon}! No, not enough fuel! Need to refuel the car!`);
  }  
}

let drivingTime = (road, speed) => {
  let time = road / speed;
  if (time >= 4) {
    const breakTime = Math.trunc(time / 4);
    time = time + breakTime;
    return `driving time ${time}, break time is ${breakTime}`;
  } else {
    return `driving time ${time}`;
  }
}

const drivingLicense = (driverPerson) => {
  return driverPerson === car.driver ? `For ${driverPerson} driving allowed` : `For ${driverPerson} driving forbidden`;
}

car.info();
console.log(fuelConsumption (roadLength, car.averageFuel));
console.log(drivingTime(roadLength, car.averageSpeed));
console.log(drivingLicense('Oxana'));
