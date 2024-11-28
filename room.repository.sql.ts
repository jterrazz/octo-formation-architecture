export class RoomSqlRepository {
    async get() {
        return [
            {
                floor: 1,
                number: 1,
                price: 50,
            }
        ]
    }
}