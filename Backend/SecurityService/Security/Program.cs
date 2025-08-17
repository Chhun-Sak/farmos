using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Security;
using Security.Data;
using Security.Data.Model;
using Security.Service;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);
try
{
    builder.Services.AddDbContextFactory<SecurityContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
    );
}catch
{
    Console.WriteLine($"Fail to connect to database.");
    throw;
}

builder.Services.AddLogging(config =>
{
    config.AddConsole();
    config.AddDebug();
});


builder.Services.AddIdentityCore<User>()
    .AddRoles<Role>()
    .AddEntityFrameworkStores<SecurityContext>()
    .AddUserManager<UserManager<User>>()
    .AddSignInManager<SignInManager<User>>()
    .AddRoleManager<RoleManager<Role>>()
    .AddDefaultTokenProviders();

builder.Services
    .AddScoped<ISecurityService, SecurityService>()
    .AddScoped<ServiceTokenService>()
    .AddAuthorization()
    .AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme);

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Security.Graphql.Query>()
    .AddMutationType<Security.Graphql.Mutation>()
    .AddAuthorization();

//------ Add HTTP clients for other services
builder.Services.AddHttpClient("ProductService", client =>
{
    client.BaseAddress = new Uri("https://localhost:5002/");
});

builder.Services.AddHttpClient("OrderService", client =>
{
    client.BaseAddress = new Uri("https://localhost:5003/");
});

builder.Services.AddHttpClient("PaymentService", client =>
{
    client.BaseAddress = new Uri("https://localhost:5004/");
});

builder.Services.AddControllers();
var app = builder.Build();

// Apply migrations with error handling
try
{
    var context = app.Services.GetRequiredService<IDbContextFactory<SecurityContext>>().CreateDbContext();
    var logger = app.Services.GetRequiredService<ILogger<Program>>();

    logger.LogInformation("Applying database migrations...");
    context.Database.Migrate();
    logger.LogInformation("Database migrations applied successfully.");
}
catch (Exception ex)
{
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred while applying migrations.");
    throw; // Re-throw to prevent startup if migrations fail
}



app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors(i => i
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);
app.MapGraphQL();
app.MapControllers();

app.Run();
