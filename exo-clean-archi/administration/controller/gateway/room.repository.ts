import { RoomDTO, RoomGateway } from "../../business/gateway/room.gateway";

export class RoomRepository implements RoomGateway {
    constructor(private rooms: Array<RoomDTO>) {}

    updateRoomPrice(roomNumber: number, newPrice: number): Promise<void> {
        const room = this.rooms.find(room => room.number === roomNumber);
        if (!room) {
            throw new Error(`Failed to find room ${roomNumber}`)
        }
        room.price = newPrice;
        return Promise.resolve()
    }

    getRooms(): Promise<Array<RoomDTO>> {
        return Promise.resolve(this.rooms);
    }
}