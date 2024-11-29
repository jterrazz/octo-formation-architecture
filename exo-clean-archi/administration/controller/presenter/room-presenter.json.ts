import { Room } from "../../business/entity/room";

export class RoomPresenterJson {
    private r: Array<Room> = [];

    set(rooms: Array<Room>) {
        this.r = rooms;
    }

    format() {
        return this.r.map(r => {
            return {
                floor: r.floor.floor,
                price: r.price,
                number: r.number,
            }
        })
    }
}
