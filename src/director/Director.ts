import IBuilder from "../build/IBuilder";
import VehicleType from "../components/VehicleType";
import Transmission from "../components/Transmission";
import Engine from "../components/Engine";
import Wheel from "../components/Wheel";

export default class Director {
    constructor(private  builder: IBuilder) {
    }

    constructSedanCar() {
        this.builder.setVehicleType(VehicleType.SEDAN)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine((1600)))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
    }
}