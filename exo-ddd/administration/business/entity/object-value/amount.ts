export class Amount {
    public readonly value: number

    constructor(value: number) {
        this.value = Number(value.toFixed(2))
    }
}