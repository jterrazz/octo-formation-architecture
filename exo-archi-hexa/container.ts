import { UpdateRoomPrice, updateRoomPriceFactory } from "./application/use-cases/update-room-price"
import { HostelRepositoryStub } from "./server-side/hostel.adapter.stub"

interface Container {
    UpdateRoomPrice: UpdateRoomPrice
}

export const createContainer = (): Container => {
    // Injecter
    
    return {
        UpdateRoomPrice: updateRoomPriceFactory(new HostelRepositoryStub([]))
    }
}