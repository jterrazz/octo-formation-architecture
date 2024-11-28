import assert from "assert"
import { RoomService } from "."
import { describe, test } from "mocha"
import { RoomRepositoryStub } from "./room.repository.stub"


describe('Room service', () => {
    test('Get list room', async () => {
        // Given
        const expectedRooms = [{
            floor: 2,
            number: 1,
            price: 50,
        }]
        const roomRepository = new RoomRepositoryStub(expectedRooms);
        const roomService = new RoomService(roomRepository)

        // When
        const rooms = await roomService.getRoom()
        
        // Then
        assert.deepStrictEqual(rooms, [
            {
                floor: 2,
                number: 1,
                price: 50,
            }
        ])
    })
})