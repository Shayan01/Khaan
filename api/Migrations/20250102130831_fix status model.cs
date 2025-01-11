using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace company.Migrations
{
    /// <inheritdoc />
    public partial class fixstatusmodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TitleId",
                table: "Status",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Status_TitleId",
                table: "Status",
                column: "TitleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Status_Title_TitleId",
                table: "Status",
                column: "TitleId",
                principalTable: "Title",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Status_Title_TitleId",
                table: "Status");

            migrationBuilder.DropIndex(
                name: "IX_Status_TitleId",
                table: "Status");

            migrationBuilder.DropColumn(
                name: "TitleId",
                table: "Status");
        }
    }
}
