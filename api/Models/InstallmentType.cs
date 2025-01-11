

namespace khaan.Models
{
    public class InstallmentType
    {
        public int Id { get; set; }
        public required Title Title { get; set; }
        public byte Count { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}