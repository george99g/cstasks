using System;

namespace Shapes
{
    public class Circle : Shape
    {
        public Circle(Vertex2D o, double r)
        {
            O = o;
            R = r;
        }
        public override double SurfaceArea()
        {
            return Math.PI*Math.Pow(R, 2);
        }
        public Vertex2D O {get; set;}
        public double R {get; set;}
    }
}