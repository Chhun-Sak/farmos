using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ListingService.Migrations
{
    /// <inheritdoc />
    public partial class RowVersioning : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BuyPostCategory_Catergories_CategoriesId",
                schema: "Catalog",
                table: "BuyPostCategory");

            migrationBuilder.DropForeignKey(
                name: "FK_CategorySellPost_Catergories_CategoriesId",
                schema: "Catalog",
                table: "CategorySellPost");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Catergories",
                schema: "Catalog",
                table: "Catergories");

            migrationBuilder.RenameTable(
                name: "Catergories",
                schema: "Catalog",
                newName: "Categories",
                newSchema: "Catalog");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                schema: "Catalog",
                table: "SellPosts",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                schema: "Catalog",
                table: "SellPosts",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                schema: "Catalog",
                table: "SellPosts",
                type: "bytea",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                schema: "Catalog",
                table: "BuyPosts",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                schema: "Catalog",
                table: "BuyPosts",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                schema: "Catalog",
                table: "BuyPosts",
                type: "bytea",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                schema: "Catalog",
                table: "Categories",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                schema: "Catalog",
                table: "Categories",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                schema: "Catalog",
                table: "Categories",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BuyPostCategory_Categories_CategoriesId",
                schema: "Catalog",
                table: "BuyPostCategory",
                column: "CategoriesId",
                principalSchema: "Catalog",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategorySellPost_Categories_CategoriesId",
                schema: "Catalog",
                table: "CategorySellPost",
                column: "CategoriesId",
                principalSchema: "Catalog",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BuyPostCategory_Categories_CategoriesId",
                schema: "Catalog",
                table: "BuyPostCategory");

            migrationBuilder.DropForeignKey(
                name: "FK_CategorySellPost_Categories_CategoriesId",
                schema: "Catalog",
                table: "CategorySellPost");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                schema: "Catalog",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "RowVersion",
                schema: "Catalog",
                table: "SellPosts");

            migrationBuilder.DropColumn(
                name: "RowVersion",
                schema: "Catalog",
                table: "BuyPosts");

            migrationBuilder.RenameTable(
                name: "Categories",
                schema: "Catalog",
                newName: "Catergories",
                newSchema: "Catalog");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                schema: "Catalog",
                table: "SellPosts",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                schema: "Catalog",
                table: "SellPosts",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                schema: "Catalog",
                table: "BuyPosts",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                schema: "Catalog",
                table: "BuyPosts",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                schema: "Catalog",
                table: "Catergories",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                schema: "Catalog",
                table: "Catergories",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Catergories",
                schema: "Catalog",
                table: "Catergories",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BuyPostCategory_Catergories_CategoriesId",
                schema: "Catalog",
                table: "BuyPostCategory",
                column: "CategoriesId",
                principalSchema: "Catalog",
                principalTable: "Catergories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategorySellPost_Catergories_CategoriesId",
                schema: "Catalog",
                table: "CategorySellPost",
                column: "CategoriesId",
                principalSchema: "Catalog",
                principalTable: "Catergories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
