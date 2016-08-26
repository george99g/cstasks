namespace Shapes
{
    public class Rectangle : Parallelogram
    {
        public Rectangle(Vertex2D a, Vertex2D b, Vertex2D c) : base(a, b, c) {}
        public override double SurfaceArea()
        {
            return Vertex2D.Distance(A, B)*Vertex2D.Distance(A, D);
        }
    }
}