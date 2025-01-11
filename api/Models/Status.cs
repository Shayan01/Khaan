namespace khaan.Models
{
    public class Status
    {
        public int Id { get; set; }
        public int TitleId { get; set; } // Foreign Key
        public virtual Title Title { get; set; } = null!; 
    }
}