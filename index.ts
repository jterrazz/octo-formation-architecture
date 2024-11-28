interface RoomRepository {
    get(): Promise<unknown>
}

export class RoomService {
    constructor(private readonly roomRepository: RoomRepository) {}

    async getRoom() {
        return this.roomRepository.get()
    }
}