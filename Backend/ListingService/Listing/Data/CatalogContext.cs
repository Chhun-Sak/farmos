namespace Catalog.Data;

using Catalog.Data.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

public class CatalogContext : DbContext
{
    public CatalogContext(DbContextOptions<CatalogContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("Catalog");
        base.OnModelCreating(modelBuilder);
    }
    public DbSet<SellPost> SellPosts { get; set; }
    public DbSet<BuyPost> BuyPosts { get; set; }
    public DbSet<Category> Categories { get; set; }
}