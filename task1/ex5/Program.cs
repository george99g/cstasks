//   0123 4567 89AB CDEF     012 345 678     01 23
//  +----+----+----+----+   +---+---+---+   +--+--+
// 0|    |    |    |    |0 0|   |   |   |0 0|  |  |0
// 1|    |    |    |    |1 1|   |   |   |1 1|  |  |1
// 2|    |    |    |    |2 2|   |   |   |2  +-----+
// 3|    |    |    |    |3  +-----------+  2|  |  |2
//  +-------------------+  3|   |   |   |3 3|  |  |3
// 4|    |    |    |    |4 4|   |   |   |4  +--+--+
// 5|    |    |    |    |5 5|   |   |   |5
// 6|    |    |    |    |6  +-----------+
// 7|    |    |    |    |7 6|   |   |   |6
//  +-------------------+  7|   |   |   |7
// 8|    |    |    |    |8 8|   |   |   |8
// 9|    |    |    |    |9  +---+---+---+
// A|    |    |    |    |A
// B|    |    |    |    |B
//  +-------------------+
// C|    |    |    |    |C
// D|    |    |    |    |D
// E|    |    |    |    |E
// F|    |    |    |    |F
//  +----+----+----+----+


using System;
using System.Globalization;

namespace ConsoleApplication
{
    public class Program
    {
        /*public static void PrintBoard(int [,] board, int size)
        {
            for(int row = 0; row < size; row++)
            {
                for(int col = 0; col < size; col++)
                    Console.Write(board[row, col].ToString() + " ");
                Console.WriteLine();
            }
        }*/
        public static bool CheckSubsection(int[,] board, int notation)
        {
            int size = (int)Math.Sqrt(notation);
            bool[] checkedValues = new bool[notation];
            for(int row = 0; row < size; row++)
                for(int col = 0; col < size; col++)
                {
                    if(checkedValues[board[row, col]])
                        return false;
                    checkedValues[board[row,col]] = true;
                }
            return true;
        }
        public static bool CheckBoard(int[,] board, int notation)
        {
            for(int row = 0; row < notation; row++)
            {
                bool[] checkedValues = new bool[notation];
                for(int col = 0; col < notation; col++)
                {
                    if(checkedValues[board[row, col]])
                        return false;
                    checkedValues[board[row, col]] = true;
                }
            }
            for(int col = 0; col < notation; col++)
            {
                bool[] checkedValues = new bool[notation];
                for(int row = 0; row < notation; row++)
                {
                    if(checkedValues[board[row, col]])
                        return false;
                    checkedValues[board[row, col]] = true;
                }
            }
            int size = (int)Math.Sqrt(notation);
            for(int section = 0; section < notation; section++)
            {
                int[,] subsection = new int[size, size];
                for(int row = section/size; row < (section+size)/size; row++)
                    for(int col = section%size; col < (section+size)%size; row++)
                        subsection[row-size*(section/size),col-size*(section%size)] = board[row, col];
            }
            return true;
        }
        public static void Main(string[] args)
        {
            Console.Write("Notation: ");
            int notation = 10;
            while(true)
            {
                notation = int.Parse(Console.ReadLine());
                if(notation != 4 && notation != 10 && notation != 16)
                {
                    Console.Write("Invalid notation. Try again:");
                    continue;
                }
                break;
            }
            if(notation == 10)
                notation--;
            int[,] board = new int[notation, notation];
            /*int[,] board = new int[,] {
                {8,2,7,1,5,4,3,9,6},
                {9,6,5,3,2,7,1,4,8},
                {3,4,1,6,8,9,7,5,2},
                {5,9,3,4,6,8,2,7,1},
                {4,7,2,5,1,3,6,8,9},
                {6,1,8,9,7,2,4,3,5},
                {7,8,6,2,3,5,9,1,4},
                {1,5,4,7,9,6,8,2,3},
                {2,3,9,8,4,1,5,6,7}
            };
            for(int row = 0; row < notation; row++)
                for(int col = 0; col < notation; col++)
                    board[row, col]--;*/
            for(int row = 0; row < notation; row++)
            {
                String input = Console.ReadLine();
                String[] elements = input.Split(' ');
                for(int col = 0; col < notation; col++)
                {
                    switch(notation)
                    {
                        case 16:
                            board[col, row] = int.Parse(elements[col], NumberStyles.HexNumber);
                            break;
                        case 9:
                            //Make the range 0 to 8 in order to remove the edge-case in functions
                            board[col, row] = int.Parse(elements[col]) - 1;
                            break;
                        case 4:
                            board[col, row] = int.Parse(elements[col]);
                            break;
                        default:
                            break;
                    }
                }
            }
            if(CheckBoard(board, notation))
                Console.WriteLine("Congratulations!");
            else
                Console.WriteLine("Sorry, try again.");
        }
    }
}
