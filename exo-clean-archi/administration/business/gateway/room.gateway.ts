export interface RoomDTO {
    floor: number;
    number: number;
    price: number;
}

export interface RoomGateway {
    updateRoomPrice(roomNumber: number, newPrice: number): Promise<void>
    getRooms(): Promise<Array<RoomDTO>>
}