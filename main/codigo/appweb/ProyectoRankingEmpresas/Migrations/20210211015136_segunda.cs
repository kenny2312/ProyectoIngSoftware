using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace ProyectoRankingEmpresas.Migrations
{
    public partial class segunda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "remuneraciones",
                table: "Cargos");

            migrationBuilder.CreateTable(
                name: "Remuneracions",
                columns: table => new
                {
                    Guid = table.Column<string>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    sueldobase = table.Column<double>(nullable: false),
                    remuineracionTotal = table.Column<double>(nullable: false),
                    bonoalimentacion = table.Column<double>(nullable: false),
                    bononavidad = table.Column<double>(nullable: false),
                    horasextra = table.Column<double>(nullable: false),
                    decimotercero = table.Column<double>(nullable: false),
                    decimocuarto = table.Column<double>(nullable: false),
                    iees = table.Column<double>(nullable: false),
                    transporte = table.Column<double>(nullable: false),
                    bonouniforme = table.Column<double>(nullable: false),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    cargoId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Remuneracions", x => x.Guid);
                    table.ForeignKey(
                        name: "FK_Remuneracions_Cargos_cargoId",
                        column: x => x.cargoId,
                        principalTable: "Cargos",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Restrict);
                });

          
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Remuneracions");

            migrationBuilder.AddColumn<int>(
                name: "remuneraciones",
                table: "Cargos",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
