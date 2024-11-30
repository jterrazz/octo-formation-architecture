
import { Amount } from "../entity/object-value/amount";
import { Hostel } from "../entity/hostel";
import { Room } from "../entity/room";
import { RoomNumber } from "../entity/object-value/room-number";
import { HostelRespository } from "../gateway/hostel.repository";
import { Floor } from "../entity/object-value/floor";

export interface Presenter {
    set: (rooms: Array<Room>) => void
}

export type UpdateHostelPrice = (basePrice: number, presenter: Presenter) => Promise<void>

export const updateHostelPriceFactory = (repository: HostelRespository) => {
    return async (basePrice: number, presenter: Presenter) => {
        if (basePrice < 0) {
            throw new Error('Amount cannot be negative number')
        }
        const hostelDto = await repository.get()
        const hostel = new Hostel(new Amount(hostelDto.baseAmount), hostelDto.rooms.map(r => {
            return new Room(new Floor(r.floor), new RoomNumber(r.number), new Amount(r.price))
        }))
        hostel.updatePrice(new Amount(basePrice))
        await repository.update(hostel)
        const updatedHostelDto = await repository.get()
        const updatedHostel = new Hostel(new Amount(updatedHostelDto.baseAmount), updatedHostelDto.rooms.map(r => {
            return new Room(new Floor(r.floor), new RoomNumber(r.number), new Amount(r.price))
        }))
        presenter.set(updatedHostel.rooms);
    }
}
