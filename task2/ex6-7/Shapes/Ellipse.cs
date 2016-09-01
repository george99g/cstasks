using System;

namespace Shapes
{
    public class Ellipse : Shape
    {
        public Ellipse(Vertex2D f1, Vertex2D f2, double p)
        {
            F1 = f1;
            F2 = f2;
            P = p;
        }
        public override double SurfaceArea()
        {
            double majorAxis = P;
            double minorAxis = Math.Sqrt(P*P - Vertex2D.Distance(F1, F2));
            return Math.PI*majorAxis*minorAxis;
        }
        public override void Draw()
        {
            Console.WriteLine("An ellipse was drawn!");
        }
        public Vertex2D F1 {get; set;}
        public Vertex2D F2 {get; set;}
        public double P {get; set;}
    }
}