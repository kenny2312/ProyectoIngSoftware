﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using ProyectoRankingEmpresas.Model;

namespace ProyectoRankingEmpresas.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20201210005328_nueva")]
    partial class nueva
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("EntityModel.MClass.ActionU", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("GroupId")
                        .HasColumnType("integer");

                    b.Property<string>("Nombre")
                        .HasColumnType("text");

                    b.Property<string>("Valor")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.ToTable("Actions");
                });

            modelBuilder.Entity("EntityModel.MClass.Cargos", b =>
                {
                    b.Property<string>("Guid")
                        .HasColumnType("text");

                    b.Property<string>("Code")
                        .HasColumnType("character varying(20)")
                        .HasMaxLength(20);

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("EmpresaId")
                        .HasColumnType("text");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Name")
                        .HasColumnType("character varying(55)")
                        .HasMaxLength(55);

                    b.Property<int>("remuneraciones")
                        .HasColumnType("integer");

                    b.HasKey("Guid");

                    b.HasIndex("EmpresaId");

                    b.ToTable("Cargos");
                });

            modelBuilder.Entity("EntityModel.MClass.Empresa", b =>
                {
                    b.Property<string>("Guid")
                        .HasColumnType("text");

                    b.Property<string>("Address")
                        .HasColumnType("character varying(55)")
                        .HasMaxLength(55);

                    b.Property<string>("City")
                        .HasColumnType("character varying(60)")
                        .HasMaxLength(60);

                    b.Property<string>("Code")
                        .HasColumnType("character varying(20)")
                        .HasMaxLength(20);

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Industry")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("character varying(55)")
                        .HasMaxLength(55);

                    b.Property<string>("Phone")
                        .HasColumnType("character varying(10)")
                        .HasMaxLength(10);

                    b.HasKey("Guid");

                    b.ToTable("Empresa");
                });

            modelBuilder.Entity("EntityModel.MClass.GrupoUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("character varying(55)")
                        .HasMaxLength(55);

                    b.Property<string>("UsuarioCreation")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("GrupoUser");
                });

            modelBuilder.Entity("EntityModel.MClass.UserEmp", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("EmpresaId")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("EmpresaId");

                    b.HasIndex("UserId");

                    b.ToTable("UsuarioEmpresa");
                });

            modelBuilder.Entity("EntityModel.MClass.UserSys", b =>
                {
                    b.Property<string>("Guid")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("GrupuserId")
                        .HasColumnType("integer");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("LastName")
                        .HasColumnType("character varying(55)")
                        .HasMaxLength(55);

                    b.Property<string>("Name")
                        .HasColumnType("character varying(55)")
                        .HasMaxLength(55);

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("user")
                        .HasColumnType("text");

                    b.HasKey("Guid");

                    b.HasIndex("GrupuserId")
                        .IsUnique();

                    b.ToTable("User");
                });

            modelBuilder.Entity("EntityModel.MClass.ActionU", b =>
                {
                    b.HasOne("EntityModel.MClass.GrupoUser", "Group")
                        .WithMany("Acciones")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EntityModel.MClass.Cargos", b =>
                {
                    b.HasOne("EntityModel.MClass.Empresa", "EmpresaR")
                        .WithMany()
                        .HasForeignKey("EmpresaId");
                });

            modelBuilder.Entity("EntityModel.MClass.UserEmp", b =>
                {
                    b.HasOne("EntityModel.MClass.Empresa", "Empresa")
                        .WithMany("Usuarios")
                        .HasForeignKey("EmpresaId");

                    b.HasOne("EntityModel.MClass.UserSys", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("EntityModel.MClass.UserSys", b =>
                {
                    b.HasOne("EntityModel.MClass.GrupoUser", "grupouser")
                        .WithOne("User")
                        .HasForeignKey("EntityModel.MClass.UserSys", "GrupuserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
