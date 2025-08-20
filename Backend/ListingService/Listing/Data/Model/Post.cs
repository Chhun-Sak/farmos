
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Catalog.Data.Model;

public abstract class Post
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string Title { get; set; }
    public required string Description { get; set; }
    public string? ImageUrl { get; set; }
    public required decimal Price { get; set; }

    public ICollection<Category> Categories { get; set; } = [];
    public DateTime DateCreated { get; set; } 
    public DateTime DateUpdated { get; set; } 
    [Timestamp]
    public byte[]? RowVersion { get; set; }
}
