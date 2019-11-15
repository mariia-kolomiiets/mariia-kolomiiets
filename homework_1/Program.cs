using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework_1
{
    class Program
    {
        static void Main(string[] args)
        {
            string oper = "";
            string first_n;
            string second_n;
            double first;
            double second;
            List<string> operation = new List<string>() { "+", "*", "/", "-" };
            while (!operation.Contains(oper))
            {
                Console.Write("Operation: ");
                oper = Console.ReadLine();
            }
            Console.Write("First number: ");
            while (!Double.TryParse(first_n = Console.ReadLine(), out first))
            {
                Console.WriteLine("First number: ");
            }
            Console.Write("Second number: ");
            while (!Double.TryParse(second_n = Console.ReadLine(), out second))
            {
                Console.WriteLine("Second number: ");
            }
            if (oper == "+"){ Console.WriteLine("The answer is {0}", first + second); }
            else if (oper == "-") { Console.WriteLine("The answer is {0}", first - second); }
            else if (oper == "*") { Console.WriteLine("The answer is {0}", first * second); }
            else { Console.WriteLine("The answer is {0}", first / second); }
            Console.ReadKey();
        }
    }
}
