import { UpdateRoomPrice, updateRoomPriceFactory } from "../business/use-cases/update-room-price"
import { RoomRepository } from "../controller/gateway/room.repository"

interface Container {
    UpdateRoomPrice: UpdateRoomPrice
}

export const createContainer = (): Container => {
    return {
        UpdateRoomPrice: updateRoomPriceFactory(new RoomRepository([
            {
                floor: 0,
                number: 1,
                price: 0,
            },
            {
                floor: 1,
                number: 2,
                price: 0,
            },
            {
                floor: 2,
                number: 3,
                price: 0,
            },
            {
                floor: 3,
                number: 4,
                price: 0,
            }
        ]))
    }
}