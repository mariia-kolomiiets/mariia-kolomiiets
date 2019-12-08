using System;
using System.Collections.Generic;
namespace Game_proj
{
    class Program
    {
        static void Main(string[] args)
        {
            SportCar Garry = new SportCar("Garry", 8);
            Truck Filis = new Truck("Filis", 4);
            SimpleCar Thomas = new SimpleCar("Thomas", 6);
            Game rush = new Game();
            rush.AddParticipant(Garry);
            rush.AddParticipant(Filis);
            rush.AddParticipant(Thomas);
            rush.GoGame();
            Console.ReadLine();
        }
    }
    public class Game
    {
        static int distance = 20;
        delegate void Go();
        delegate void FinishEvent();
        event FinishEvent isFinish;
        
        Go go;
        bool isRaicing = true;
        List<Car> Participants = new List<Car>();
        public void AddParticipant(Car car)
        {
            Participants.Add(car);
        }
        public void GoGame()
        {
            Participants.ForEach(par => go += par.Move);
         
            isFinish += CheckIsFinish;
            while (isRaicing)
            {
                go();
                System.Threading.Thread.Sleep(2000);
                isFinish();
            }
            
        }
        public void CheckIsFinish()
        {
            foreach(Car car in Participants)
            {
                if (car.position >= distance)
                {
                    Console.ForegroundColor = ConsoleColor.White;
                    isRaicing = false;
                    Console.WriteLine(car.title + " is WINNNN!");
                    break;
                }
            }
        }
    }

    public abstract class Car
    {
        int max_speed;
        public string title;
        public int position = 0;
        public Car(string t, int s)
        {
            title = t;
            max_speed = s;
        }
        public void Move()
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(title + " has passed: " + position+"km.");
            Random random = new Random();
            int distance = random.Next(1, max_speed);
            position += distance;
        }
    }
    public class SportCar:Car
    {
        public SportCar(string t, int s)
            :base(t, s) { }
    }
    public class SimpleCar : Car
    {
        public SimpleCar(string t, int s)
            : base(t, s) { }
    }
    public class Truck : Car
    {
        public Truck(string t, int s)
            : base(t, s) { }
    }
    public class Bus : Car
    {
        public Bus(string t, int s)
            : base(t, s) { }
    }
}

