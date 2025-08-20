FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
COPY ["Listing/ListingService.csproj", "ListingSrc/"]

WORKDIR /ListingSrc
RUN dotnet restore "ListingService.csproj"
COPY . .

FROM build AS publish
RUN dotnet publish "ListingService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ListingService.dll"]