class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    computeArea(): number {
        return this.width * this.height;
    }
}

export { Rectangle }
