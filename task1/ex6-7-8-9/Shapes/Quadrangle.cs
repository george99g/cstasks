namespace Shapes
{
    public class Quadrangle : Shape
    {
        public Quadrangle(Vertex2D a, Vertex2D b, Vertex2D c, Vertex2D d)
        {
            A = a;
            B = b;
            C = c;
            D = d;
        }
        public override double SurfaceArea()
        {
            Triangle tri1 = new Triangle(A, B, C);
            Triangle tri2 = new Triangle(C, D, A);
            return tri1.SurfaceArea()+tri2.SurfaceArea();
        }
        public Vertex2D A {get; set;}
        public Vertex2D B {get; set;}
        public Vertex2D C {get; set;}
        public Vertex2D D {get; set;}
    }
}