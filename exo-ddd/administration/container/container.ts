import { UpdateHostelPrice, updateHostelPriceFactory } from "../business/use-cases/update-room-price"
import { HostelRepositoryInMemory } from "../controller/gateway/hostel.repository"

interface Container {
    UpdateHostelPrice: UpdateHostelPrice
}

export const createContainer = (): Container => {
    return {
        UpdateHostelPrice: updateHostelPriceFactory(new HostelRepositoryInMemory(
            {
                baseAmount: 100,
                rooms: [
                    {
                        floor: 0,
                        number: 1,
                        price: 0,
                    },
                    {
                        floor: 1,
                        number: 2,
                        price: 0,
                    },
                    {
                        floor: 2,
                        number: 3,
                        price: 0,
                    },
                    {
                        floor: 3,
                        number: 4,
                        price: 0,
                    }
                ]
            }
        ))
    }
}