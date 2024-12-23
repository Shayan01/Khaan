

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

            modelBuilder.Entity<Loan>()
            .HasOne(l => l.InstallmentType);

            modelBuilder.Entity<Loan>()
            .HasOne(l => l.Person);

            modelBuilder.Entity<Pay>()
            .HasOne(p => p.Loan);
            modelBuilder.Entity<Pay>()
            .HasOne(p => p.Person);


            new InitialData(modelBuilder).Seed();
        }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<Pay> Pays { get; set; }
        public DbSet<InstallmentType> InstallmentTypes { get; set; }


    }
}