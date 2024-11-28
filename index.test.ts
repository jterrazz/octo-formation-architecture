import assert from "assert"
import { RoomService } from "."
import { describe, test } from "mocha"

describe('Room service', () => {
    test('Get list room', async () => {
        // Given
        const roomService = new RoomService()

        // When
        const rooms = await roomService.getRoom()
        
        // Then
        assert.deepStrictEqual(rooms, [
            {
                floor: 1,
                number: 1,
                price: 50,
            }
        ])
    })
})