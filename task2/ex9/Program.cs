using System;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static List<Tuple<string, uint>> Occurrences(string input)
        {
            Dictionary<string, uint> dict = new Dictionary<string, uint>();
            string[] tokens = input.ToLower().Split(' ');

            for(int i = 0; i < tokens.Length; i++)
            {
                if(dict.ContainsKey(tokens[i]))
                    dict[tokens[i]]++;
                else
                    dict[tokens[i]] = 1;
            }

            List<Tuple<string, uint>> output = new List<Tuple<string, uint>>();
            foreach(KeyValuePair<string, uint> pair in dict)
                output.Add(new Tuple<string, uint>(pair.Key, pair.Value));
            output.Sort((Tuple<string, uint> x, Tuple<string, uint> y) => y.Item2.CompareTo(x.Item2));

            return output;
        }
        public static void Main(string[] args)
        {
            Console.Write("Enter some text: ");
            List<Tuple<string, uint>> list = Occurrences(Console.ReadLine());
            for(int i = 0; i < list.Count; i++)
                Console.WriteLine("{0} -> {1}", list[i].Item1, list[i].Item2);
        }
    }
}
