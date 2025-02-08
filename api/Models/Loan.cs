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
        public required int TitleId { get; set; }
        public int? PersonId { get; set; }
        public required int InstallmentTypeId { get; set; }
        public required int PriceId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }


    }
}