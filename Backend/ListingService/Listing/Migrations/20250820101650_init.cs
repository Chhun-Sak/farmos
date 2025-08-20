using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ListingService.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Catalog");

            migrationBuilder.CreateTable(
                name: "BuyPosts",
                schema: "Catalog",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    BuyerId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    ImageUrl = table.Column<string>(type: "text", nullable: true),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "timestamp with time zone", rowVersion: true, nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "timestamp with time zone", rowVersion: true, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BuyPosts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Catergories",
                schema: "Catalog",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Catergories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SellPosts",
                schema: "Catalog",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SellerId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    ImageUrl = table.Column<string>(type: "text", nullable: true),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "timestamp with time zone", rowVersion: true, nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "timestamp with time zone", rowVersion: true, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellPosts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BuyPostCategory",
                schema: "Catalog",
                columns: table => new
                {
                    BuyPostsId = table.Column<Guid>(type: "uuid", nullable: false),
                    CategoriesId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BuyPostCategory", x => new { x.BuyPostsId, x.CategoriesId });
                    table.ForeignKey(
                        name: "FK_BuyPostCategory_BuyPosts_BuyPostsId",
                        column: x => x.BuyPostsId,
                        principalSchema: "Catalog",
                        principalTable: "BuyPosts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BuyPostCategory_Catergories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalSchema: "Catalog",
                        principalTable: "Catergories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CategorySellPost",
                schema: "Catalog",
                columns: table => new
                {
                    CategoriesId = table.Column<Guid>(type: "uuid", nullable: false),
                    SellPostsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategorySellPost", x => new { x.CategoriesId, x.SellPostsId });
                    table.ForeignKey(
                        name: "FK_CategorySellPost_Catergories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalSchema: "Catalog",
                        principalTable: "Catergories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategorySellPost_SellPosts_SellPostsId",
                        column: x => x.SellPostsId,
                        principalSchema: "Catalog",
                        principalTable: "SellPosts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BuyPostCategory_CategoriesId",
                schema: "Catalog",
                table: "BuyPostCategory",
                column: "CategoriesId");

            migrationBuilder.CreateIndex(
                name: "IX_CategorySellPost_SellPostsId",
                schema: "Catalog",
                table: "CategorySellPost",
                column: "SellPostsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BuyPostCategory",
                schema: "Catalog");

            migrationBuilder.DropTable(
                name: "CategorySellPost",
                schema: "Catalog");

            migrationBuilder.DropTable(
                name: "BuyPosts",
                schema: "Catalog");

            migrationBuilder.DropTable(
                name: "Catergories",
                schema: "Catalog");

            migrationBuilder.DropTable(
                name: "SellPosts",
                schema: "Catalog");
        }
    }
}
