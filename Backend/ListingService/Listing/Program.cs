using Microsoft.EntityFrameworkCore;
using Catalog.Data;
using Catalog.Graphql;
using Catalog.Service;
using Catalog.Asset;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLogging(config =>
{
    config.AddConsole();
    config.AddDebug();
});

builder.Services.AddDbContextFactory<CatalogContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<ICatalogService, CatalogService>();

builder.Services
    .AddAuthorization()
    .AddControllers();

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>();

var app = builder.Build();

app.UseRouting();
app.UseAuthorization();
app.UseHttpsRedirection();
app.MapGraphQL();

app.MapControllers();
app.Run();
