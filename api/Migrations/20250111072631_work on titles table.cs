using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace company.Migrations
{
    /// <inheritdoc />
    public partial class workontitlestable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InstallmentTypes_Title_TitleId",
                table: "InstallmentTypes");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_Title_TitleId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Price_Title_TitleId",
                table: "Price");

            migrationBuilder.DropForeignKey(
                name: "FK_Status_Title_TitleId",
                table: "Status");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Title",
                table: "Title");

            migrationBuilder.RenameTable(
                name: "Title",
                newName: "Titles");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Titles",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "Titles",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Titles",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Titles",
                table: "Titles",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_InstallmentTypes_Titles_TitleId",
                table: "InstallmentTypes",
                column: "TitleId",
                principalTable: "Titles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Loans_Titles_TitleId",
                table: "Loans",
                column: "TitleId",
                principalTable: "Titles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Price_Titles_TitleId",
                table: "Price",
                column: "TitleId",
                principalTable: "Titles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Status_Titles_TitleId",
                table: "Status",
                column: "TitleId",
                principalTable: "Titles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InstallmentTypes_Titles_TitleId",
                table: "InstallmentTypes");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_Titles_TitleId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Price_Titles_TitleId",
                table: "Price");

            migrationBuilder.DropForeignKey(
                name: "FK_Status_Titles_TitleId",
                table: "Status");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Titles",
                table: "Titles");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Titles");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Titles");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Titles");

            migrationBuilder.RenameTable(
                name: "Titles",
                newName: "Title");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Title",
                table: "Title",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_InstallmentTypes_Title_TitleId",
                table: "InstallmentTypes",
                column: "TitleId",
                principalTable: "Title",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Loans_Title_TitleId",
                table: "Loans",
                column: "TitleId",
                principalTable: "Title",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Price_Title_TitleId",
                table: "Price",
                column: "TitleId",
                principalTable: "Title",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Status_Title_TitleId",
                table: "Status",
                column: "TitleId",
                principalTable: "Title",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
