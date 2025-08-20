using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Catalog.Data.Model;

[Table("Categories", Schema = "Catalog")]
public class Category
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string Title { get; set; }
    public string Description { get; set; } = "";
    public ICollection<SellPost> SellPosts { get; set; } = [];
    public ICollection<BuyPost> BuyPosts { get; set; } = [];
}