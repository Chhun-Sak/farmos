using Security.Data.Model;

namespace Security.Asset;
public abstract record PayloadBase
{
    public bool Success { get; }
    public string Message { get; }

    protected PayloadBase(bool success, string message)
    {
        Success = success;
        Message = message;
    }
}

/// <summary>
/// Authentication response payload
/// </summary>
public record AuthPayload(bool Success, User? User, string Message) : PayloadBase(Success, Message);
public record RolePayload(bool Success, Role? Role, string Message) : PayloadBase(Success, Message);
public record UserPayload(bool Success, User? User, string Message) : PayloadBase(Success, Message);