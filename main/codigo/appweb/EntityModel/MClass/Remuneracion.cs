using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EntityModel.MClass
{
   public class Remuneracion
    {

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [Key]
        public string Guid { get; set; }
        public double sueldobase { get; set; }
        public double remuineracionTotal { get; set; }
        public double bonoalimentacion { get; set; }
        public double bononavidad { get; set; }
        public double horasextra { get; set; }
        public double decimotercero { get; set; }
        public double decimocuarto { get; set; }
        public double iees { get; set; }
        public double transporte { get; set; }
        public double bonouniforme { get; set; }
        public DateTime CreationDate { get; set; }

        [ForeignKey("cargoId")]
        public string cargoId { get; set; }
        public  Cargo cargo { get; set; }

    }
}
