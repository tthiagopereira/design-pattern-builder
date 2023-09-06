import Director from "./director/Director";
import VechicleBuild from "./build/VechicleBuild";
import Vehicle from "./products/Vehicle";

const build: VechicleBuild = new VechicleBuild();
const director: Director = new Director(build);

director.constructSedanCar()

const sedan: Vehicle = build.getVehicle()

console.log(`Criano um veiculo do tipo ${sedan.vehicleType}`)