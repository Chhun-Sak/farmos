namespace Catalog.Asset;

#nullable disable
public record SellPost(Guid Id, string Title, string Description, decimal Price, Guid SellerId);
public record SellPostCreate(string Title, string Description, decimal Price, Guid SellerId);