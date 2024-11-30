import { Hostel } from "../entity/hostel";

export interface HostelDTO {
    baseAmount: number
    rooms: Array<RoomDTO>
}

export interface RoomDTO {
    floor: number;
    number: number;
    price: number;
}

export interface HostelRespository {
    update(hostel: Hostel): Promise<void>
    get(): Promise<HostelDTO>
}