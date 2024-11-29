import { Floor } from "./floor";

export class Room {
    public floor: Floor;
    constructor(
        floorNumber: number,
        public number: number,
        public price: number,
    ) {
        this.floor = new Floor(floorNumber);
    }

    setPrice(basePrice: number) {
        this.price = Math.min(Number((basePrice * this.floor.getFactor()).toFixed(2)), 200)
    }
}