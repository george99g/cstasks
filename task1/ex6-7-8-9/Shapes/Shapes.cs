using System;

namespace Shapes
{
    public class Vertex2D
    {
        public Vertex2D(double x, double y)
        {
            X = x; Y = y;
        }
        public static double Distance(Vertex2D p1, Vertex2D p2)
        {
            return Math.Sqrt(Math.Pow(p1.X - p2.X, 2) + Math.Pow(p1.Y - p2.Y, 2));
        }
        public static Vertex2D Midpoint(Vertex2D p1, Vertex2D p2)
        {
            return new Vertex2D((p1.X+p2.X)/2, (p1.Y+p2.Y)/2);
        }
        public override String ToString()
        {
            return String.Format("[{0},{1}]", X, Y);
        }
        public double X {get; set;}
        public double Y {get; set;}
    }
    public abstract class Shape
    {
        public virtual void Draw()
        {
            Console.WriteLine("A "+GetType().Name.ToLower()+" was drawn!");
        }
        public abstract double SurfaceArea();
    }
    
    
}