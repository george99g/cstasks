using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static bool CheckParentheses(string input)
        {
            int parenCounter = 0;
            for(int i = 0; i < input.Length; i++)
            {
                if(input[i] == '(')
                    parenCounter++;
                else if(input[i] == ')')
                {
                    if(parenCounter <= 0)
                        return false;
                    else
                        parenCounter--;
                }
            }
            return parenCounter == 0;
        }
        public static void Main(string[] args)
        {
            Console.Write("Input some text with parentheses: ");
            string input = Console.ReadLine();
            if(CheckParentheses(input))
                Console.WriteLine("true");
            else
                Console.WriteLine("false");
            return;
        }
    }
}
