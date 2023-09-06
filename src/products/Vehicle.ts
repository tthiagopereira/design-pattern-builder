import VehicleType from "../components/VehicleType";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import Wheel from "../components/Wheel";

export default class Vehicle {
    private _vehicleType: VehicleType
    private _seats: number;
    private _engine: Engine;
    private _transmission: Transmission;
    private _wheels: Wheel[] = [];

    addWheel(wheel: Wheel) {
        this._wheels.push(wheel)
    }

    get wheels(): Wheel[] {
        return this.wheels;
    }

    get wheelsTotal() {
        return this._wheels.length
    }

    get vehicleType(): VehicleType {
        return this._vehicleType;
    }

    set vehicleType(value: VehicleType) {
        this._vehicleType = value
    }

    get seats(): number {
        return this._seats;
    }

    set seats(value: number) {
        this._seats = value
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        this._engine = Engine
    }

    get transmission(): Transmission {
        return this._transmission;
    }

    set transmission(value: Transmission) {
        this._transmission = value
    }
}