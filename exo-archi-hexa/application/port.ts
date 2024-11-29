export interface Room {
    floor: number
    price: number
}

export interface ForModifyingRoom {
    updateRoomPrice(roomNumber: number, newPrice: number): Promise<void>
}