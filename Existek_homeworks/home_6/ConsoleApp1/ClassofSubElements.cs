using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public abstract class Storage_media
    {
        string __title;
        string __generator;
        string __model;
        int __count;
        decimal __price;
        public Storage_media(string t = "", string g = "", string m = "", int c = 0, decimal p = 0)
        {
            __title = t;
            __generator = g;
            __model = m;
            __count = c;
            __price = p;
        }
        public string Title { get { return __title; } set { __title = value; } }
        public string Generator { get { return __generator; } set { __generator = value; } }
        public string Model { get { return __model; } set { __model = value; } }
        public string Count { get { return Convert.ToString(__count); } set { __count = Convert.ToInt32(value); } }
        public string Price { get { return Convert.ToString(__price); } set { __price = Convert.ToDecimal(value); } }
        public void Print()
        {
            Console.Write("\n------------------------------\nTitle: " + Title + "\nGenerator is: " + Generator + "\nModel - " + Model + "\nCount: " + Count + "\nPrice = " + Price);
        }
        public virtual void Loading()
        {
            Console.Write(__title + " is loading. Please wait.");
        }
        public virtual void Saving()
        {
            Console.Write(__title + " is saving...");
        }

    }
    public class Flash: Storage_media
    {
        decimal capacity;
        decimal speed;
        public Flash(string t="", string g="", string m="", int c=0, decimal p=0, decimal cap=0, decimal s=0)
            :base(t, g, m, c, p)
        {
            capacity = cap;
            speed = s;
        }
        public decimal Capacity { get { return capacity; } set { capacity = value; } }
        public decimal Speed { get { return speed; } set { speed = value; } }
        public override void Loading()
        {
            base.Loading();
            Console.WriteLine(" Actual speed is " + Convert.ToString(speed));

        }
        public override void Saving()
        {
            base.Saving();
            Console.WriteLine(" Actual speed is " + Convert.ToString(speed));

        }
        public new void Print()
        {
            base.Print();
            Console.WriteLine("\nCapacity - "+capacity+"\nSpeed = "+speed+"\n------------------------------");
        }
    }

    public class DVD : Storage_media
    {
        decimal capacity;
        decimal speed;
        public DVD(string t="", string g="", string m="", int c=0, decimal p=0, decimal cap=0, decimal s=0)
            : base(t, g, m, c, p)
        {
            capacity = cap;
            speed = s;
        }
        public decimal Capacity { get { return capacity; } set { capacity = value; } }
        public decimal Speed { get { return speed; } set { speed = value; } }

        public override void Loading()
        {
            base.Loading();
            Console.WriteLine(" Actual speed is " + Convert.ToString(speed));

        }
        public override void Saving()
        {
            base.Saving();
            Console.WriteLine(" Actual speed is " + Convert.ToString(speed));

        }
        public new void Print()
        {
            base.Print();
            Console.WriteLine("\nCapacity - " + capacity + "\nSpeed = " + speed + "\n------------------------------");
        }
    }
    public class HDD : Storage_media
    {
        decimal reading;
        decimal writing;
        public HDD(string t="", string g="", string m="", int c=0, decimal p=0, decimal r=0, decimal w=0)
            : base(t, g, m, c, p)
        {
            reading = r;
            writing = w;
        }
        public decimal Reading { get { return reading; } set { reading = value; } }
        public decimal Writing { get { return writing; } set { writing = value; } }

        public override void Loading()
        {
            base.Loading();
            Console.WriteLine(" Reading speed is " + Convert.ToString(reading));

        }
        public override void Saving()
        {
            base.Saving();
            Console.WriteLine(" Writing speed is " + Convert.ToString(writing));

        }
        public new void Print()
        {
            base.Print();
            Console.WriteLine("\nReading speed is - " + reading + "\nWriting speed is  = " + writing + "\n------------------------------");
        }
    }

}
