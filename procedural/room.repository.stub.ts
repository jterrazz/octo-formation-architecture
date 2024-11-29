export class RoomRepositoryStub {
    constructor(private readonly data: unknown) {}

    async get() {
        return Promise.resolve(this.data)
    }
}