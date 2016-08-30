using System;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static readonly Dictionary<char, Tuple<uint, bool>> operatorPrecedence
        = new Dictionary<char, Tuple<uint, bool>> {
            {'^', new Tuple<uint, bool>(4, true)},

            {'*', new Tuple<uint, bool>(3, false)},
            {'/', new Tuple<uint, bool>(3, false)},

            {'+', new Tuple<uint, bool>(2, false)},
            {'-', new Tuple<uint, bool>(2, false)}
        };
        public static List<string> Tokenize(string input)
        {
            List<string> output = new List<string>();
            string currentToken = "";

            for(int i = 0; i < input.Length; i++)
            {
                if(input[i] == ' ')
                    continue;
                if(operatorPrecedence.ContainsKey(input[i])
                    || input[i] == '('
                    || input[i] == ')')
                {
                    if(currentToken != "")
                    {
                        output.Add(currentToken);
                        currentToken = "";
                    }
                    output.Add(Char.ToString(input[i]));
                }
                else
                    currentToken += input[i];
                if(i == input.Length - 1 && currentToken != "")
                    output.Add(currentToken);
            }
            return output;
        }
        public static List<string> InfixToRPN(List<string> input)
        {
            List<string> output = new List<string>();
            Stack<char> operatorStack = new Stack<char>();

            for(int i = 0; i < input.Count; i++)
            {
                double _;
                if(operatorPrecedence.ContainsKey(input[i][0]))
                {
                    char operatorOne = input[i][0];
                    if(operatorStack.Count != 0)
                    {
                        char operatorTwo = operatorStack.Peek();
                        while(
                            operatorPrecedence.ContainsKey(operatorTwo)
                            &&
                            (
                                (
                                    operatorPrecedence[operatorOne].Item2 == false
                                    &&
                                    operatorPrecedence[operatorOne].Item1
                                    <= operatorPrecedence[operatorTwo].Item1
                                )
                                ||
                                (
                                    operatorPrecedence[operatorOne].Item2 == true
                                    &&
                                    operatorPrecedence[operatorOne].Item1
                                    < operatorPrecedence[operatorTwo].Item1
                                )
                            )
                        )
                        {
                            output.Add(Char.ToString(operatorStack.Pop()));
                            if(operatorStack.Count == 0)
                                break;
                            operatorTwo = operatorStack.Peek();
                        }
                    }
                    operatorStack.Push(operatorOne);
                }
                else if(input[i][0] == '(')
                    operatorStack.Push('(');
                else if(input[i][0] == ')')
                {
                    while(operatorStack.Peek() != '(')
                        output.Add(Char.ToString(operatorStack.Pop()));
                    operatorStack.Pop();
                }
                else if(double.TryParse(input[i], out _))
                    output.Add(input[i]);
            }

            while(operatorStack.Count != 0)
                output.Add(Char.ToString(operatorStack.Pop()));
            return output;
        }
        public static double CalculateRPN(List<string> input)
        {
            Stack<double> valueStack = new Stack<double>();
            double valueToken;

            for(int i = 0 ; i < input.Count; i++)
            {
                if(double.TryParse(input[i], out valueToken))
                    valueStack.Push(valueToken);
                else
                {
                    double valueTwo = valueStack.Pop();
                    double valueOne = valueStack.Pop();
                    double output;
                    switch(input[i][0])
                    {
                        case '^':
                            output = Math.Pow(valueOne, valueTwo);
                            break;
                        case '*':
                            output = valueOne * valueTwo;
                            break;
                        case '/':
                            output = valueOne / valueTwo;
                            break;
                        case '-':
                            output = valueOne - valueTwo;
                            break;
                        default:
                            output = valueOne + valueTwo;
                            break;
                    }
                    valueStack.Push(output);
                }
            }

            return valueStack.Pop();
        }
        public static double Evaluate(string input)
        {
            return CalculateRPN(InfixToRPN(Tokenize(input)));
        }
        public static void Main(string[] args)
        {
            Console.Write("Enter a string to be evaluated: ");
            Console.WriteLine(Evaluate(Console.ReadLine()));
        }
    }
}
