

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

            modelBuilder.Entity<Loan>()
            .HasOne(l => l.Title);

            modelBuilder.Entity<Loan>()
            .HasOne(l => l.Price);

            modelBuilder.Entity<Pay>()
            .HasOne(p => p.Loan);
            modelBuilder.Entity<InstallmentType>()
            .HasOne(i => i.Title);
            modelBuilder.Entity<Pay>()
            .HasOne(p => p.Person);
            modelBuilder.Entity<Pay>()
            .HasOne(p => p.Price);
            modelBuilder.Entity<Pay>()
            .HasOne(p => p.Status);
             modelBuilder.Entity<Price>()
            .HasOne(p => p.Title);
            
modelBuilder.Entity<Status>()
    .HasOne(s => s.Title)
    .WithMany() 
    .HasForeignKey(s => s.TitleId); 


            new InitialData(modelBuilder).Seed();
        }
        public DbSet<Title> Titles { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<Pay> Pays { get; set; }
        public DbSet<InstallmentType> InstallmentTypes { get; set; }


    }
}