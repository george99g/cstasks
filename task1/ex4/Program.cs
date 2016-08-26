using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            DateTime today = DateTime.Today;
            DateTime christmas;
            if(today.CompareTo(new DateTime(today.Year, 12, 25)) > 0)
                christmas = new DateTime(today.Year + 1, 12, 25);
            else
                christmas = new DateTime(today.Year, 12, 25);
            int daysUntilChristmas = 0;
            for(DateTime date = today; date < christmas; date = date.AddDays(1))
                if(date.DayOfWeek != DayOfWeek.Friday &&
                   date.DayOfWeek != DayOfWeek.Saturday &&
                   date.DayOfWeek != DayOfWeek.Sunday)
                   daysUntilChristmas++;
            Console.WriteLine(daysUntilChristmas.ToString()+" work days left until Christmas.");
        }
    }
}
