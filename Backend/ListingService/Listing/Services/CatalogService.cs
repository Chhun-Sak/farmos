namespace Catalog.Service;

using System.Data.Common;
using Catalog.Asset;
using Catalog.Data;
using Microsoft.EntityFrameworkCore;

public class CatalogService(IDbContextFactory<CatalogContext> contextFactory, ILogger<CatalogService> logger) : ICatalogService
{
    private readonly ILogger<CatalogService> _logger = logger;
    public async Task<SellPost> CreateSellPost(SellPostCreate sellPostCreate)
    {
        using var context = contextFactory.CreateDbContext();
        try
        {
            var SellPost = sellPostCreate.ToSellPostModel();
            await context.AddAsync(SellPost);
            await context.SaveChangesAsync();
            return SellPost.ToSellPost();
        }
        catch(DbException databaseException)
        {
            _logger.LogError(databaseException, "Database exception occurred while creating a SellPost.");
            throw;
        }
    }

    public async Task<List<SellPost>> GetSellPosts()
    {
        using var context = contextFactory.CreateDbContext();
        return await context.SellPosts.Select(i => i.ToSellPost()).ToListAsync();
    }

    public Task GetSellPostById(Guid postId)
    {
        throw new NotImplementedException();
    }
}