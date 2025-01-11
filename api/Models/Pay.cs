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
        public required Price Price { get; set; }
        public required Loan? Loan { get; set; }
        public required Person Person { get; set; }
        public required Status Status { get; set; }
    }
}