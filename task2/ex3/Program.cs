using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static string Reverse(string input)
        {
            string output = "";
            for(int i = input.Length - 1; i >= 0; i--)
                output += input[i];
            return output;
        }
        public static void Main(string[] args)
        {
            Console.Write("Enter a string to be reversed: ");
            Console.WriteLine(Reverse(Console.ReadLine()));
        }
    }
}
