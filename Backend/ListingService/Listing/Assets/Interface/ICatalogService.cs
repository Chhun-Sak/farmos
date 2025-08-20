namespace Catalog.Asset;

public interface ICatalogService
{
    //Task CreateBuyPost(string Name);
    Task<SellPost> CreateSellPost(SellPostCreate sellPost);
    //Task DeletePost(Guid postId);
    //Task GetBuyPosts();
    Task<List<SellPost>> GetSellPosts();
    Task GetSellPostById(Guid postId);
}