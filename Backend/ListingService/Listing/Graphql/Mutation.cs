namespace Catalog.Graphql;

using HotChocolate;
using Catalog.Asset;
using Catalog.Service;
public class Mutation
{
    public async Task<SellPost> CreateSellPost([Service] ICatalogService _catalogService, SellPostCreate sellPost)
    {
        return await _catalogService.CreateSellPost(sellPost);
    }
}