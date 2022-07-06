import { Car } from "./Car";

export interface Store {
    cars:Array<Car>;
    user:Object;
    carts:Array<Car>;
}