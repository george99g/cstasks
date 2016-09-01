using System;

namespace Shapes
{
    public class Square : Rectangle
    {
        public Square(Vertex2D a, Vertex2D b, Vertex2D c) : base(a, b, c) {}
        public override double SurfaceArea()
        {
            return Math.Pow(Vertex2D.Distance(A, B), 2);
        }
    }
}