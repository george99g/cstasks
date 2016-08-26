using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.Write("Number of Fibonacci numbers to output: ");
            int count;
            while(true)
            {
                try {
                    count = int.Parse(Console.ReadLine());
                    break;
                } catch (FormatException) {
                    Console.Write("Not a valid number. Try again: ");
                }
            }
            int first = 1;
            int second = 1;
            int next;
            for(int i = 0; i < count; i++)
            {
                switch(i)
                {
                    case 0:
                        Console.Write(0);
                        break;
                    case 1:
                    case 2:
                        Console.Write(1);
                        break;
                    default:
                        next = first + second;
                        second = first;
                        first = next;
                        Console.Write(next%2==0?-next:next);
                        break;
                }
                Console.Write(" ");
            }
            Console.WriteLine();
            return;
        }
    }
}
