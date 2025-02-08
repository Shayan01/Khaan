namespace khaan.Models
{
    public class Pay
    {
        public int Id { get; set; }
        public int? Score { get; set; }
        public int? ReceiptId { get; set; }
        public required DateTime Date { get; set; }
        public required DateTime InstallmentDate { get; set; }
        public required string? TraceNumber { get; set; }
        public required int PriceId { get; set; }
        public required int? LoanId { get; set; }
        public required int PersonId { get; set; }
        public required int StatusId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}