using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace company.Migrations
{
    /// <inheritdoc />
    public partial class workonmodels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InstallmentTypes_Titles_TitleId",
                table: "InstallmentTypes");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_InstallmentTypes_InstallmentTypeId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_Persons_PersonId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_Price_PriceId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_Titles_TitleId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Pays_Loans_LoanId",
                table: "Pays");

            migrationBuilder.DropForeignKey(
                name: "FK_Pays_Persons_PersonId",
                table: "Pays");

            migrationBuilder.DropForeignKey(
                name: "FK_Pays_Price_PriceId",
                table: "Pays");

            migrationBuilder.DropForeignKey(
                name: "FK_Pays_Status_StatusId",
                table: "Pays");

            migrationBuilder.DropTable(
                name: "Price");

            migrationBuilder.DropTable(
                name: "Status");

            migrationBuilder.DropIndex(
                name: "IX_Pays_LoanId",
                table: "Pays");

            migrationBuilder.DropIndex(
                name: "IX_Pays_PersonId",
                table: "Pays");

            migrationBuilder.DropIndex(
                name: "IX_Pays_PriceId",
                table: "Pays");

            migrationBuilder.DropIndex(
                name: "IX_Pays_StatusId",
                table: "Pays");

            migrationBuilder.DropIndex(
                name: "IX_Loans_InstallmentTypeId",
                table: "Loans");

            migrationBuilder.DropIndex(
                name: "IX_Loans_PersonId",
                table: "Loans");

            migrationBuilder.DropIndex(
                name: "IX_Loans_PriceId",
                table: "Loans");

            migrationBuilder.DropIndex(
                name: "IX_Loans_TitleId",
                table: "Loans");

            migrationBuilder.DropIndex(
                name: "IX_InstallmentTypes_TitleId",
                table: "InstallmentTypes");

            migrationBuilder.RenameColumn(
                name: "PersonId",
                table: "Loans",
                newName: "Personid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Personid",
                table: "Loans",
                newName: "PersonId");

            migrationBuilder.CreateTable(
                name: "Price",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TitleId = table.Column<int>(type: "INTEGER", nullable: false),
                    Amount = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Price", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Price_Titles_TitleId",
                        column: x => x.TitleId,
                        principalTable: "Titles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Status",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TitleId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Status", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Status_Titles_TitleId",
                        column: x => x.TitleId,
                        principalTable: "Titles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pays_LoanId",
                table: "Pays",
                column: "LoanId");

            migrationBuilder.CreateIndex(
                name: "IX_Pays_PersonId",
                table: "Pays",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Pays_PriceId",
                table: "Pays",
                column: "PriceId");

            migrationBuilder.CreateIndex(
                name: "IX_Pays_StatusId",
                table: "Pays",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Loans_InstallmentTypeId",
                table: "Loans",
                column: "InstallmentTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Loans_PersonId",
                table: "Loans",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Loans_PriceId",
                table: "Loans",
                column: "PriceId");

            migrationBuilder.CreateIndex(
                name: "IX_Loans_TitleId",
                table: "Loans",
                column: "TitleId");

            migrationBuilder.CreateIndex(
                name: "IX_InstallmentTypes_TitleId",
                table: "InstallmentTypes",
                column: "TitleId");

            migrationBuilder.CreateIndex(
                name: "IX_Price_TitleId",
                table: "Price",
                column: "TitleId");

            migrationBuilder.CreateIndex(
                name: "IX_Status_TitleId",
                table: "Status",
                column: "TitleId");

            migrationBuilder.AddForeignKey(
                name: "FK_InstallmentTypes_Titles_TitleId",
                table: "InstallmentTypes",
                column: "TitleId",
                principalTable: "Titles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Loans_InstallmentTypes_InstallmentTypeId",
                table: "Loans",
                column: "InstallmentTypeId",
                principalTable: "InstallmentTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Loans_Persons_PersonId",
                table: "Loans",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Loans_Price_PriceId",
                table: "Loans",
                column: "PriceId",
                principalTable: "Price",
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
                name: "FK_Pays_Loans_LoanId",
                table: "Pays",
                column: "LoanId",
                principalTable: "Loans",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pays_Persons_PersonId",
                table: "Pays",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Pays_Price_PriceId",
                table: "Pays",
                column: "PriceId",
                principalTable: "Price",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Pays_Status_StatusId",
                table: "Pays",
                column: "StatusId",
                principalTable: "Status",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
