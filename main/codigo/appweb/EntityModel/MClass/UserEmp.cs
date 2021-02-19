using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EntityModel.MClass
{
   public  class UserEmp
    {

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual UserSys User { get; set; }
        public string EmpresaId { get; set; }
        [ForeignKey("EmpresaId")]
        [NotMapped]
        public virtual Empresa Empresa { get; set; }

    }
}
