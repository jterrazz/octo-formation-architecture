import { Amount } from "./object-value/amount";
import { Floor } from "./object-value/floor";
import { RoomNumber } from "./object-value/room-number";

export class Room {
    constructor(
        public floor: Floor,
        public number: RoomNumber,
        public price: Amount,
    ) {}

    setPrice(amount: Amount) {
        const newAmount = new Amount(amount.value * this.floor.getFactor())
        this.price = newAmount.value > 200 ? new Amount(200) : newAmount;
    }
}