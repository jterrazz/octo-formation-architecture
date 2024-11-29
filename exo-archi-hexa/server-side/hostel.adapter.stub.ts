import { ForModifyingRoom, Room } from "../application/port";

export class HostelRepositoryStub implements ForModifyingRoom {
    constructor(private rooms: Array<Room>) {}

    updateRoomPrice(floor: number, newPrice: number): Promise<void> {
        const rooms = this.rooms.filter(room => room.floor === floor);
        rooms.forEach(room => {
            room.price = newPrice;
        })
        return Promise.resolve()
    }

    getRooms(): Promise<Array<Room>> {
        return Promise.resolve(this.rooms);
    }
}