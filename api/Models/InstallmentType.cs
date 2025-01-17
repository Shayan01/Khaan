

using System.ComponentModel.DataAnnotations.Schema;

namespace khaan.Models
{
    public class InstallmentType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int TitleId { get; set; }
        public byte Count { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }

    }
}