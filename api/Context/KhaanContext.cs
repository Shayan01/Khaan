

using khaan.Models;
using Microsoft.EntityFrameworkCore;

namespace khaan.Context
{
    public class KhaanContext : DbContext
    {
        public KhaanContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
                 


            new InitialData(modelBuilder).Seed();
        }
        public DbSet<Title> Titles { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<Pay> Pays { get; set; }
        public DbSet<InstallmentType> InstallmentTypes { get; set; }


    }
}