namespace Shapes
{
    public class Triangle : Shape
    {
        public Triangle(Vertex2D a, Vertex2D b, Vertex2D c)
        {
            A = a;
            B = b;
            C = c;
        }
        public override double SurfaceArea()
        {
            return (A.X*(B.Y-C.Y)+
                    B.X*(C.Y-A.Y)+
                    C.X*(A.Y-B.Y))/2;
        }
        public Vertex2D A {get; set;}
        public Vertex2D B {get; set;}
        public Vertex2D C {get; set;}
    }
}