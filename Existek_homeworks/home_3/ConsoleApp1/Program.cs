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
            Flash flash = new Flash("Flashio", "SanDisk", "A112", 5, 38, 14, 100);
            DVD dvd = new DVD("DVDio", "Siny", "PQ001", 10, 50, 2, 45);
            HDD hdd = new HDD("HDiDio", "WesternDigital", "SWJ701", 15, 2500, 200, 200);
            Application app = new Application();
            app.Add(flash);
            app.Add(dvd);
            app.Add(hdd);
            app.Delete();
            app.PrintAll();
            Console.ReadKey();
        }
    }
    
    public class Application
    {
        List<Storage_media> storage = new List<Storage_media>();
        public void Add(Storage_media item)
        {
            storage.Add(item);
        }

        public void Delete()
        {
            Console.Write("Type title of your device/");
            string criteria = Console.ReadLine();
            storage.Remove(storage.Find(v => v.Title == criteria));
        }
        public void PrintAll()
        {
            storage.ForEach(v => v.Print());
        }
        public void Change()
        {
            Console.Write("Type title of your device/");
            string criteria = Console.ReadLine();
            Console.Write("What do you want to change/");
            string change = Console.ReadLine();
            Console.Write("Type your change/");
            string value = Console.ReadLine();
            var dev = storage.Find(v => v.Title == criteria);
            switch (change)
            {
                case "title":
                    dev.Title = value;
                    break;
                case "generator":
                    dev.Generator = value;
                    break;
                case "model":
                    dev.Model = value;
                    break;
                case "count":
                    dev.Count = value;
                    break;
                case "price":
                    dev.Price = value;
                    break;
            }
            Console.WriteLine("Change installed succesful!");
        }
        public void Search()
        {
            Console.Write("Type title of your device/");
            string criteria = Console.ReadLine();
            var dev = storage.Find(v => v.Title == criteria);
            dev.Print();
        }

    }


}
