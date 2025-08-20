

using System.ComponentModel.DataAnnotations.Schema;

namespace Catalog.Data.Model;

[Table("SellPosts", Schema = "Catalog")]
public class SellPost : Post
{
    public Guid SellerId { get; set; }
}
