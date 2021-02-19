using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoRankingEmpresas.Migrations
{
    public partial class cmpo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           

            migrationBuilder.AddColumn<string>(
                name: "EmprId",
                table: "User",
                nullable: true);

          

            

            migrationBuilder.AddForeignKey(
                name: "FK_User_Empresa_EmprId",
                table: "User",
                column: "EmprId",
                principalTable: "Empresa",
                principalColumn: "Guid",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_Empresa_EmprId",
                table: "User");

       

            migrationBuilder.DropColumn(
                name: "EmprId",
                table: "User");

          
        }
    }
}
