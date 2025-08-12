FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
COPY ["Security/SecurityService.csproj", "SecuritySrc/"]

WORKDIR /SecuritySrc
RUN dotnet restore "SecurityService.csproj"
COPY . .

FROM build AS publish
RUN dotnet publish "SecurityService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SecurityService.dll"]