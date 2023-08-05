
// ---------------- Task 1 ------------------------------


class Car {

  constructor(brands, classify, color, fuelType, tankSize , maxDriveFullFuel) {
    this.brands = brands;
    this.classify = classify;
    this.color = color;
    this.fuelType = fuelType;
    this.tankSize = tankSize;
    this.maxDriveFullFuel = maxDriveFullFuel;
  }

  getAboutCar = function () {

    console.log(
      "Car name is a " +
        this.brands +
        ". Classify: " +
        this.classify +
        ". Color: " +
        this.color +
        ". Fuel type: " +
        this.fuelType + 
        ". Tank size: " +
        this.tankSize + 
        ". Maximum drive full fuel: " +
        this.maxDriveFullFuel
    );
  };

  fuelConsumption = function (fuel) {

        let canDrive;

        if(fuel<=this.tankSize) {
            canDrive = fuel * this.maxDriveFullFuel / this.tankSize;
            console.log("If your car is a " + this.brands + " and you have " + fuel + " liters fuel in car's tank, you can drive " + canDrive + " km.")
        }else{
            console.log("You can't put " + fuel + " litres fuel in your fuel tank, because your car's tank size is " + this.tankSize + " litres" )
        }
        
    }
}

const firstCar = new Car("Toyota Carolla", "sedan", "white", "unleaded gasoline" , 49.8 , 683.9);
const secondCar = new Car("BMW 6 Series Gran Turismo", "Hatchback", "grey", "unleaded gasoline" , 68 , 931);

firstCar.getAboutCar();
firstCar.fuelConsumption(20);

secondCar.getAboutCar();
secondCar.fuelConsumption(70);



// -----------------Task 2 --------------------


const oddOrEvenNumber = number => {
    typeof number != "string" &&                // checking that the parameter is of type string
    typeof number != "undefined" &&             // checking that the function does not accept parameters
    typeof number != "object"                   // checking for writing null to the parameter
      ? number > 0
        ? number % 2 == 0
          ? console.log( number +  " - cüt ədəddir")
          : console.log(number +  "  - tək ədəddir")
        : console.log(number +  " -  natural ədəd deyil")
      : console.log("Ədəd daxil edilməyib");
  };

  oddOrEvenNumber(4);
  oddOrEvenNumber(7);
  oddOrEvenNumber(0);
  oddOrEvenNumber(-7);
  oddOrEvenNumber("Hello");
  oddOrEvenNumber(null);
  oddOrEvenNumber();
  



  
