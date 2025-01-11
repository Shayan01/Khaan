using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace company.Migrations
{
    /// <inheritdoc />
    public partial class workoninstallmentTypetable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "InstallmentTypes",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "InstallmentTypes",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "InstallmentTypes",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "InstallmentTypes");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "InstallmentTypes");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "InstallmentTypes");
        }
    }
}
