import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Square } from "./shapes/square.js";

const rectangle: Rectangle = new Rectangle(2, 3);
const rect_renderer = newRenderer(rectangle);

const circle: Circle = new Circle(2);
const cir_renderer = newRenderer(circle);

const square: Square = new Square(4);
const squ_renderer = newRenderer(square);

rect_renderer.draw();
cir_renderer.draw();
squ_renderer.draw();