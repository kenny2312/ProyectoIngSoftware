﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EntityModel.MClass
{
    public class Empresa
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]

        //id de la empresa 
        [Key]
        public string Guid { get; set; }


        [StringLength(20)]
        public string Code { get; set; }


        [StringLength(55)]
        public string Name { get; set; }


        [StringLength(55)]
        public string Address { get; set; }

        [StringLength(60)]
        public string City { get; set; }



        [DisplayName("telefono")]
        [StringLength(10)]

        public string Phone { get; set; }

        public string Industry { get; set; }

        public DateTime CreationDate { get; set; }

        

        public virtual  List<UserEmp>  Usuarios {get; set;}
        public Empresa()
        {
            Usuarios = new List<UserEmp>() { };


        }
    }
}
