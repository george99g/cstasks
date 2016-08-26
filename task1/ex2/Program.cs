using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.Write("Enter a sentence in Yoda-speech: ");
            String input = Console.ReadLine();
            int tokenCount = 1;
            for(int i = 0 ; i < input.Length; i++)
                if(input[i] == ' ')
                    tokenCount++;
            String[] tokens = new String[tokenCount];
            String currentToken = "";
            int tokenCounter = 0;
            for(int i = 0; i < input.Length; i++)
            {
                if(input[i] == ' ')
                {
                    tokens[tokenCounter++] = currentToken;
                    currentToken = "";
                }
                else if(i == input.Length - 1)
                {
                    currentToken += input[i];
                    tokens[tokenCounter] = currentToken;
                }
                else
                    currentToken += input[i];
            }
            String output = "";
            for(int i = tokenCount - 1; i >= 0; i--)
                output += tokens[i] + " ";
            output = Char.ToUpper(output[0]) + output.Substring(1);
            Console.WriteLine(output);
            return;
        }
    }
}
