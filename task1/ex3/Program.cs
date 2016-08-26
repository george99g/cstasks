using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.Write("Enter a string to check if it's a palindrome: ");
            String input = Console.ReadLine();
            for(int i = 0; i < input.Length/2; i++)
                if(input[i] != input[input.Length-1-i])
                {
                    Console.WriteLine("no");
                    return;
                }
            Console.WriteLine("yes");
            return;
        }
    }
}
