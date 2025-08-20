namespace Catalog.Asset;

using ModelClass = Catalog.Data.Model;
public static class SellPostMapper
{
    public static SellPost ToSellPost(this ModelClass.SellPost source)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        return new SellPost(source.Id, source.Title, source.Description, source.Price, source.SellerId);
    }

    public static ModelClass.SellPost ToSellPostModel(this SellPostCreate source)
    {
        if (source == null)
        {
            throw new ArgumentNullException(nameof(source));
        }

        return new ModelClass.SellPost
        {
            Title = source.Title,
            Description = source.Description,
            Price = source.Price,
            SellerId = source.SellerId,
            ImageUrl = null,
            DateCreated = DateTime.UtcNow,
            DateUpdated = DateTime.UtcNow
        };
    }
}