using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Xml;

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
            app.writeToXml();
            app.readFromXml();
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
        public void writeToXml()
        {
            XDocument document = new XDocument();
            XElement elements = new XElement("devices");
            foreach(Storage_media device in storage)
            {
                XElement dev = new XElement("unknown");
                if(device is Flash){dev.Name = "flash_device";Flash downcast = new Flash();
                downcast = (Flash)device;
                XElement capacity = new XElement("capacity", downcast.Capacity);
                XElement speed = new XElement("speed",downcast.Speed);
                dev.Add(capacity);
                dev.Add(speed);}
                else if(device is DVD){dev.Name = "DVD_device";DVD downcast = new DVD();
                downcast = (DVD)device;
                XElement capacity = new XElement("capacity", downcast.Capacity);
                XElement speed = new XElement("speed",downcast.Speed);
                dev.Add(capacity);
                dev.Add(speed);}
                else if(device is HDD){dev.Name = "HDD_device";HDD downcast = new HDD();
                downcast = (HDD)device;
                XElement reading = new XElement("reading", downcast.Reading);
                XElement writing = new XElement("writing",downcast.Writing);
                dev.Add(reading);
                dev.Add(writing);}

                XElement title = new XElement("title", device.Title);
                XElement generator = new XElement("generator",device.Generator);
                XElement model = new XElement("model",device.Model);
                XElement count = new XElement("count",device.Count);
                XElement price = new XElement("price",device.Price);

                dev.Add(title);
                dev.Add(generator);
                dev.Add(model);
                dev.Add(count);
                dev.Add(price);
                elements.Add(dev);                    
            }
            document.Add(elements);
            document.Save("D:\\deices_store.xml");
        }
        public void readFromXml()
        {
            XmlDocument document = new XmlDocument();
            document.Load("D:\\deices_store.xml");
            XmlElement root = document.DocumentElement;
            foreach(XmlElement device in root.ChildNodes)
            {
                if(device.Name == "flash_device")
                {
                    Flash f_d = new Flash();
                    f_d.Title = device.GetElementsByTagName("title")[0].InnerText;
                    f_d.Generator = device.GetElementsByTagName("generator")[0].InnerText;
                    f_d.Model = device.GetElementsByTagName("model")[0].InnerText;
                    f_d.Count = device.GetElementsByTagName("count")[0].InnerText;
                    f_d.Price = device.GetElementsByTagName("price")[0].InnerText;

                    f_d.Speed = Convert.ToDecimal(device.GetElementsByTagName("speed")[0].InnerText);
                    f_d.Capacity = Convert.ToDecimal(device.GetElementsByTagName("capacity")[0].InnerText);

                    this.Add(f_d);
                }
                else if(device.Name == "DVD_device")
                {
                    DVD d_d = new DVD();
                    d_d.Title = device.GetElementsByTagName("title")[0].InnerText;
                    d_d.Generator = device.GetElementsByTagName("generator")[0].InnerText;
                    d_d.Model = device.GetElementsByTagName("model")[0].InnerText;
                    d_d.Count = device.GetElementsByTagName("count")[0].InnerText;
                    d_d.Price = device.GetElementsByTagName("price")[0].InnerText;

                    d_d.Speed = Convert.ToDecimal(device.GetElementsByTagName("speed")[0].InnerText);
                    d_d.Capacity = Convert.ToDecimal(device.GetElementsByTagName("capacity")[0].InnerText);

                    this.Add(d_d);
                }
                else if(device.Name == "HDD_device")
                {
                    HDD h_d = new HDD();
                    h_d.Title = device.GetElementsByTagName("title")[0].InnerText;
                    h_d.Generator = device.GetElementsByTagName("generator")[0].InnerText;
                    h_d.Model = device.GetElementsByTagName("model")[0].InnerText;
                    h_d.Count = device.GetElementsByTagName("count")[0].InnerText;
                    h_d.Price = device.GetElementsByTagName("price")[0].InnerText;

                    h_d.Reading = Convert.ToDecimal(device.GetElementsByTagName("reading")[0].InnerText);
                    h_d.Writing = Convert.ToDecimal(device.GetElementsByTagName("writing")[0].InnerText);

                    this.Add(h_d);
                }
            }
        }

    }


}
