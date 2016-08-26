using System;
using Shapes;
namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Parallelogram parallelogram = new Parallelogram(
                new Vertex2D(1, 2),
                new Vertex2D(4, 3),
                new Vertex2D(6, 6)
            );
            Console.WriteLine(parallelogram.D);
        }
    }
}
