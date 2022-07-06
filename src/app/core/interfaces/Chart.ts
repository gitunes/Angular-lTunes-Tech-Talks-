
import { Car } from "./Car";

export interface Cart {
    color:string;
    model:string;
    km:string;
    img:string;
    quantity:number;
    id:number
}
export class cartInitialState {
    color="";
    model="";
    km=""
    img=""
    quantity="";
    id=""
}