namespace Catalog.Graphql;

using Catalog.Asset;
public class Query
{
    public async Task<List<SellPost>> GetSellPosts([Service] ICatalogService catalogService)
    {
        return await catalogService.GetSellPosts();
    }
}