

namespace khaan.Models
{
    public class Title
    {
        public int Id { get; set; }
        public required string? Caption { get; set; }
         public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}