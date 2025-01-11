using System.ComponentModel.DataAnnotations.Schema;

namespace khaan.Models
{
    public class Price
    {
        public int Id { get; set; }
         public required Title Title { get; set; }
        public required string Amount { get; set; }
    }
}