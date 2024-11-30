import { Hostel } from "../../business/entity/hostel";
import { HostelDTO, HostelRespository } from "../../business/gateway/hostel.repository";

export class HostelRepositoryInMemory implements HostelRespository {
    constructor(private hostel: HostelDTO) {}

    update(hostel: Hostel): Promise<void> {
        const hostelDTO = {
            baseAmount: hostel.baseAmount.value,
            rooms: hostel.rooms.map(r => {
                return {
                    floor: r.floor.number,
                    price: r.price.value,
                    number: r.number.value,
                }
            })
        }
        this.hostel = hostelDTO;
        return Promise.resolve()
    }

    get(): Promise<HostelDTO> {
        return Promise.resolve(this.hostel);
    }
}