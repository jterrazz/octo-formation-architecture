
import { HostelRepository } from "../port"

export type UpdateRoomPrice = (basePrice: number) => Promise<void>

enum FloorNumber {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = 3,
}

export const updateRoomPriceFactory = (repository: HostelRepository) => async (basePrice: number) => {
    if (basePrice < 0) {
        throw new Error('Amount cannot be negative number')
    }
    const floors = [
        FloorNumber.Zero,
        FloorNumber.One,
        FloorNumber.Two,
        FloorNumber.Three,
    ];
    const rules: Record<FloorNumber, number> = {
        [FloorNumber.Zero]: 1, 
        [FloorNumber.One]: 1.07,
        [FloorNumber.Two]: 1.22,
        [FloorNumber.Three]: 1.33
    }
    for (const floor of floors) {
        await repository.updateRoomPrice(floor, Math.min(Number((basePrice * rules[floor]).toFixed(2)), 200))
    }
}
