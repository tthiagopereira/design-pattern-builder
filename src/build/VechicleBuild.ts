import IBuilder from "./IBuilder";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";

export default class VechicleBuild implements IBuilder {

    private vehicle = new Vehicle();
    addWheel(wheel: Wheel) {
        this.vehicle.addWheel(wheel)
    }

    getVehicle(): Vehicle {
        const result = this.vehicle;
        this.reset()
        return result
    }

    reset(): void {
        this.vehicle = new Vehicle();
    }

    setEngine(engine: Engine) {
        this.vehicle.engine = engine
    }

    setSeats(seats: number) {
        this.vehicle.seats = seats
    }

    setTransmission(transmission: Transmission) {
        this.vehicle.transmission = transmission
    }

    setVehicleType(value: VehicleType) {
        this.vehicle.vehicleType = value
    }

}