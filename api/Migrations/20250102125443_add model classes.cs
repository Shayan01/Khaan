using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace company.Migrations
{
    /// <inheritdoc />
    public partial class addmodelclasses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Loans_InstallmentTypes_InstallmentTypeId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Pays_Persons_PersonId",
                table: "Pays");

            migrationBuilder.DropColumn(
                name: "Amount",
                table: "Loans");

            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "Pays",
                newName: "TraceNumber");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "Pays",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "InstallmentDate",
                table: "Pays",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "PriceId",
                table: "Pays",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ReceiptId",
                table: "Pays",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Score",
                table: "Pays",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StatusId",
                table: "Pays",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "InstallmentTypeId",
                table: "Loans",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Code",
                table: "Loans",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "FirstInstallmentDate",
                table: "Loans",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LastInstallmentDate",
                table: "Loans",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "PriceId",
                table: "Loans",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TitleId",
                table: "Loans",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TitleId",
                table: "InstallmentTypes",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Status",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Status", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Title",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Caption = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Title", x => x.Id);
                });

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
                        name: "FK_Price_Title_TitleId",
                        column: x => x.TitleId,
                        principalTable: "Title",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pays_PriceId",
                table: "Pays",
                column: "PriceId");

            migrationBuilder.CreateIndex(
                name: "IX_Pays_StatusId",
                table: "Pays",
                column: "StatusId");

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

            migrationBuilder.AddForeignKey(
                name: "FK_InstallmentTypes_Title_TitleId",
                table: "InstallmentTypes",
                column: "TitleId",
                principalTable: "Title",
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
                name: "FK_Loans_Price_PriceId",
                table: "Loans",
                column: "PriceId",
                principalTable: "Price",
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InstallmentTypes_Title_TitleId",
                table: "InstallmentTypes");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_InstallmentTypes_InstallmentTypeId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_Price_PriceId",
                table: "Loans");

            migrationBuilder.DropForeignKey(
                name: "FK_Loans_Title_TitleId",
                table: "Loans");

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

            migrationBuilder.DropTable(
                name: "Title");

            migrationBuilder.DropIndex(
                name: "IX_Pays_PriceId",
                table: "Pays");

            migrationBuilder.DropIndex(
                name: "IX_Pays_StatusId",
                table: "Pays");

            migrationBuilder.DropIndex(
                name: "IX_Loans_PriceId",
                table: "Loans");

            migrationBuilder.DropIndex(
                name: "IX_Loans_TitleId",
                table: "Loans");

            migrationBuilder.DropIndex(
                name: "IX_InstallmentTypes_TitleId",
                table: "InstallmentTypes");

            migrationBuilder.DropColumn(
                name: "InstallmentDate",
                table: "Pays");

            migrationBuilder.DropColumn(
                name: "PriceId",
                table: "Pays");

            migrationBuilder.DropColumn(
                name: "ReceiptId",
                table: "Pays");

            migrationBuilder.DropColumn(
                name: "Score",
                table: "Pays");

            migrationBuilder.DropColumn(
                name: "StatusId",
                table: "Pays");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Loans");

            migrationBuilder.DropColumn(
                name: "FirstInstallmentDate",
                table: "Loans");

            migrationBuilder.DropColumn(
                name: "LastInstallmentDate",
                table: "Loans");

            migrationBuilder.DropColumn(
                name: "PriceId",
                table: "Loans");

            migrationBuilder.DropColumn(
                name: "TitleId",
                table: "Loans");

            migrationBuilder.DropColumn(
                name: "TitleId",
                table: "InstallmentTypes");

            migrationBuilder.RenameColumn(
                name: "TraceNumber",
                table: "Pays",
                newName: "Amount");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "Pays",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "InstallmentTypeId",
                table: "Loans",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<string>(
                name: "Amount",
                table: "Loans",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Loans_InstallmentTypes_InstallmentTypeId",
                table: "Loans",
                column: "InstallmentTypeId",
                principalTable: "InstallmentTypes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pays_Persons_PersonId",
                table: "Pays",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id");
        }
    }
}
