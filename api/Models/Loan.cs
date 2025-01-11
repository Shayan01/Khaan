using System.ComponentModel.DataAnnotations.Schema;

namespace khaan.Models
{
    public class Loan
    {
        public int Id { get; set; }
        public int Code { get; set; }
        public DateTime Date { get; set; }
        public DateTime FirstInstallmentDate { get; set; }
        public DateTime LastInstallmentDate { get; set; }
        public required Title Title { get; set; }
        public Person? Person { get; set; }
        public required InstallmentType InstallmentType { get; set; }
        public required Price Price { get; set; }

        
    }
}