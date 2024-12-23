using System.ComponentModel.DataAnnotations.Schema;

namespace khaan.Models
{
    public class Loan
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string? Amount { get; set; }
        public Person? Person { get; set; }
        public InstallmentType? InstallmentType { get; set; }
    }
}