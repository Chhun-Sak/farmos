namespace Security.Data.Model;
using Microsoft.AspNetCore.Identity;

/// <summary>
/// Represents a user
/// </summary>
public class User : IdentityUser, IEquatable<User>
{
    [GraphQLIgnore]
    public override string? PasswordHash { get => base.PasswordHash; set => base.PasswordHash = value; }
    [GraphQLIgnore]
    public override int AccessFailedCount { get => base.AccessFailedCount; set => base.AccessFailedCount = value; }
    [GraphQLIgnore]
    public override string? ConcurrencyStamp { get => base.ConcurrencyStamp; set => base.ConcurrencyStamp = value; }
    [GraphQLIgnore]
    public override string? NormalizedEmail { get => base.NormalizedEmail; set => base.NormalizedEmail = value; }
    [GraphQLIgnore]
    public override string? NormalizedUserName { get => base.NormalizedUserName; set => base.NormalizedUserName = value; }
    [GraphQLIgnore]
    public override string? SecurityStamp { get => base.SecurityStamp; set => base.SecurityStamp = value; }
    [GraphQLIgnore]
    public override DateTimeOffset? LockoutEnd { get => base.LockoutEnd; set => base.LockoutEnd = value; }



    public bool Equals(User? other)
    {
        if (other is null) return false;
        return string.Equals(Id, other.Id, StringComparison.OrdinalIgnoreCase);
    }

    public override bool Equals(object? obj)
    {
        if (obj is null) return false;
        if (ReferenceEquals(this, obj)) return true;
        return obj is User user && Equals(user);
    }

    public override int GetHashCode()
    {
        return Id?.GetHashCode() ?? 0;
    }
}