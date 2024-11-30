export class Floor {
    constructor(public readonly number: number) {}

    getFactor() {
        if (this.number === 1) {
            return 1.07;
        }
        if (this.number === 2) {
            return 1.22;
        }
        if (this.number === 3) {
            return 1.33;
        }
        return 1;
    }
}