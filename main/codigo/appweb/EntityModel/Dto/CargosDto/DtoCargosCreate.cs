using EntityModel.MClass;
using System;
using System.Collections.Generic;
using System.Text;

namespace EntityModel.Dto.EmpresaDto
{
   public class DtoCargosCreate
    {
        

        public string Code { get; set; }
        public string Name { get; set; }
        public Remuneracion Rem { get; set; }
       public string EmpresaId { get; set; }
    }
}
