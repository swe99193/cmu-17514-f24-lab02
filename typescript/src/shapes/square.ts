class Square implements Shape {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    computeArea(): number {
        return this.sideLen * this.sideLen;
    }
}


export { Square }