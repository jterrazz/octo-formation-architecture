import assert from "assert";
import { updateRoomPriceFactory } from "./application/use-cases/update-room-price";
import { HostelRepositoryStub } from "./server-side/hostel.adapter.stub";
import { describe, test } from "mocha";

describe('Update price', () => {
    test('Update room number 1 price to 100', async () => {
        // Given
        const repository = new HostelRepositoryStub([
            {
                floor: 0,
                price: 0,
            },
            {
                floor: 1,
                price: 0,
            },
            {
                floor: 2,
                price: 0,
            },
            {
                floor: 3,
                price: 0,
            }
        ])
        const updateRoomPrice = updateRoomPriceFactory(repository)

        // When
        await updateRoomPrice(100)

        // Then
        const rooms = await repository.getRooms();
        assert.deepStrictEqual(rooms, [
            {
                floor: 0,
                price: 100,
            },
            {
                floor: 1,
                price: 107,
            },
            {
                floor: 2,
                price: 122,
            },
            {
                floor: 3,
                price: 133,
            }
        ]);
    });
})