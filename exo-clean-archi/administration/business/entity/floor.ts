export class Floor {
    constructor(public floor: number) {}

    getFactor() {
        if (this.floor === 1) {
            return 1.07;
        }
        if (this.floor === 2) {
            return 1.22;
        }
        if (this.floor === 3) {
            return 1.33;
        }
        return 1;
    }
}