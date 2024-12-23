using Microsoft.EntityFrameworkCore;

namespace khaan.Models
{
    public class InitialData
    {
        private readonly ModelBuilder modelBuilder;

        public InitialData(ModelBuilder modelBuilder)
        {
            this.modelBuilder = modelBuilder;
        }

        public void Seed()
        {
            modelBuilder.Entity<Person>().HasData(
                   new Person() { Id = 1, FirstName = "emp1", Phone = "1" },
                   new Person() { Id = 2, FirstName = "emp2", Phone = "2" },
                   new Person() { Id = 3, FirstName = "emp3", Phone = "3" },
                   new Person() { Id = 4, FirstName = "emp4", Phone = "4" },
                   new Person() { Id = 5, FirstName = "emp5", Phone = "5" }
            );
        }
    }
}