using System.ComponentModel.DataAnnotations.Schema;

namespace Catalog.Data.Model;

[Table("BuyPosts", Schema = "Catalog")]
public class BuyPost : Post
{
    public Guid BuyerId { get; set; }
}
