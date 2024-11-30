import { Amount } from "./object-value/amount";
import { Room } from "./room";

export class Hostel {
    constructor(
        public baseAmount: Amount,
        public rooms: Array<Room>,
    ) {}

    updatePrice(price: Amount) {
        this.baseAmount = price;
        this.rooms.forEach(rooms => rooms.setPrice(this.baseAmount))
    }
}