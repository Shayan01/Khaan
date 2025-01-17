using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace company.Migrations
{
    /// <inheritdoc />
    public partial class fixInstallmentTypemodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Personid",
                table: "Loans",
                newName: "PersonId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PersonId",
                table: "Loans",
                newName: "Personid");
        }
    }
}
