package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(2, 3);
        Shape circle = new Circle(2.0);
        Shape square = new Square(4);

        Renderer rect_renderer = new Renderer(rectangle);
        Renderer cir_renderer = new Renderer(circle);
        Renderer squ_renderer = new Renderer(square);

        rect_renderer.draw();
        cir_renderer.draw();
        squ_renderer.draw();
    }
}
