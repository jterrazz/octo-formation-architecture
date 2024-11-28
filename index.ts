import { RoomSqlRepository } from "./room.repository.sql.js";

export class RoomService {
    async getRoom() {
        const roomRepository = new RoomSqlRepository()

        return roomRepository.get()
    }
}