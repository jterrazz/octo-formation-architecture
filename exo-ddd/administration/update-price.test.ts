import assert from "assert";
import { describe, test } from "mocha";
import { createContainer } from "./container/container";
import { RoomPresenterJson } from "./controller/presenter/room-presenter.json";

describe('Update price', () => {
    test('Update room number 1 price to 100', async () => {
        // Given
        const container = createContainer()
        const presenter = new RoomPresenterJson()

        // When
        await container.UpdateHostelPrice(100, presenter);

        // Then
        const value = presenter.format()
        assert.deepStrictEqual(value, [
            { "number": 1, "price": 100, "floor": 0 },
            { "number": 2, "price": 107, "floor": 1 },
            { "number": 3, "price": 122, "floor": 2 },
            { "number": 4, "price": 133, "floor": 3 },
        ]);
    });
})