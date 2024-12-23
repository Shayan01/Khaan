namespace khaan.Models
{
    public class Pay
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string? Amount { get; set; }
        public Loan? Loan { get; set; }
        public Person? Person { get; set; }
    }
}