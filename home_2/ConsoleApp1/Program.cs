using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            Student Mari = new Student("Mari", "Colins", "Ant", "Group_1", 23, new List<List<int>> { new List<int> { 5, 5, 4, 5 }, new List<int> { 4, 5, 5, 5 }, new List<int> { 5 } });
            Mari.SetGetMarks();
            Mari.AverageMarks();
            Console.WriteLine(Mari.ToString());
            Console.ReadKey();
        }
    }
    class Student
    {
        private string __name;
        private string __surname;
        private string __lastname;
        private string __group;
        private int __age;
        private List<List<int>> __marks;
        public Student(string n, string s, string l, string g, int a, List<List<int>> m)
        {
            __name = n;
            __surname = s;
            __lastname = l;
            __group = g;
            __age = a;
            __marks = m;
        }

        public void SetGetMarks()

        {
            string mark;
            while (true)
            {
                Console.Write("If you want to set mark, type 1 \nElse if you want to get marks, type 2:");
                string choose = Console.ReadLine();
                string str = "";
                if (choose == "1")
                {
                    Console.Write("Select your subject: programming - 1\ndesigning - 2\nadministration - 3\n");
                    string chooseObj = Console.ReadLine();
                    switch (chooseObj)
                    {
                        case "1":
                            Console.Write("Type yor mark.");
                            mark = Console.ReadLine();
                            __marks[0].Add(Convert.ToInt32(mark));
                            break;
                        case "2":
                            Console.Write("Type yor mark.");
                            mark = Console.ReadLine();
                            __marks[1].Add(Convert.ToInt32(mark));
                            break;
                        case "3":
                            Console.Write("Type yor mark.");
                            mark = Console.ReadLine();
                            __marks[2].Add(Convert.ToInt32(mark));
                            break;
                    }
                }
                else if (choose == "2")
                {
                    Console.Write("Select your subject: programming - 1\ndesigning - 2\nadministration - 3\n");
                    string chooseObj = Console.ReadLine();

                    switch (chooseObj)
                    {
                        case "1":
                            __marks[0].ForEach((int x) => { str = str + Convert.ToString(x) + ", "; });
                            Console.WriteLine("{0}, your programing grade:{1}", __name, str);
                            continue;
                        case "2":
                            __marks[1].ForEach((int x) => { str = str + Convert.ToString(x) + ", "; });
                            Console.WriteLine("{0}, your designing grade:{1}", __name, str);
                            continue;
                        case "3":
                            __marks[2].ForEach((int x) => { str = str + Convert.ToString(x) + ", "; });
                            Console.WriteLine("{0}, your administration grade:{1}", __name, str);
                            continue;
                    }
                }
                else
                {
                    Console.WriteLine("I dont understand you, try again later.");
                    break;
                }
            }
        }
        public void AverageMarks()
        {
            Console.Write("To get average marks select subject: programming - 1\ndesigning - 2\nadministration - 3\n");
            string chooseObj = Console.ReadLine();
            int aver = 0;
            switch (chooseObj)
            {
                case "1":
                    __marks[0].ForEach((int x) => { aver += x; });
                    aver = aver / __marks[0].Count;
                    Console.WriteLine("{0}, your programing average grades:{1}", __name, aver);
                    break;
                case "2":
                    __marks[1].ForEach((int x) => { aver += x; });
                    aver = aver / __marks[1].Count;
                    Console.WriteLine("{0}, your designing average grades:{1}", __name, aver);
                    break;
                case "3":
                    __marks[2].ForEach((int x) => { aver += x; });
                    aver = aver / __marks[2].Count;
                    Console.WriteLine("{0}, your administration average grades:{1}", __name, aver);
                    break;
            }
        }
        public override string ToString()
        {
            string marks = "PROGRAMING: ";

            __marks[0].ForEach((int x) => marks = marks + " " + x);
            marks += "\nDESIGNING: ";
            __marks[1].ForEach((int x) => marks = marks + " " + x);
            marks += "\nADMINISTRATION: ";
            __marks[2].ForEach((int x) => marks = marks + " " + x);
            return $"Name: {__name}\nSurname: {__surname}\nLastname: {__lastname}\nGroup: {__group}\nAge: {__age}\nMarks: {marks}!";
        }
    }  
}
