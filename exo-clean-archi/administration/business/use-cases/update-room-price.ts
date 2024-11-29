
import { Room } from "../entity/room";
import { RoomGateway } from "../gateway/room.gateway";

export interface Presenter {
    set: (rooms: Array<Room>) => void
}

export type UpdateRoomPrice = (basePrice: number, presenter: Presenter) => Promise<void>

export const updateRoomPriceFactory = (repository: RoomGateway) => {
    return async (basePrice: number, presenter: Presenter) => {
        if (basePrice < 0) {
            throw new Error('Amount cannot be negative number')
        }
        const roomsDto = await repository.getRooms()
        const rooms = roomsDto.map(r => new Room(r.floor, r.number, r.price));
        for (const room of rooms) {
            room.setPrice(basePrice)
            await repository.updateRoomPrice(room.number, room.price)
        }
        const updatedRooms = (await repository.getRooms()).map(r => new Room(r.floor, r.number, r.price));
        presenter.set(updatedRooms);
    }
}
