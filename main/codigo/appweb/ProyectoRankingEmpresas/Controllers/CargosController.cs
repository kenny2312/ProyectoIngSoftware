using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using EntityModel.Dto.EmpresaDto;
using EntityModel.MClass;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoRankingEmpresas.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProyectoRankingEmpresas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public CargosController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        // GET: api/<CargosController>
        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<List<DtoCargos>>> Get(int id)
        {
            var emp =  _context.User.SingleOrDefault(x=>x.Id==id).EmprId;
            var carg = await _context.Cargos.Where(x=>x.EmpresaId== emp).ToListAsync();

            var dto = _mapper.Map<List<DtoCargos>>(carg);
            if (dto == null)

            {
                return NotFound();
            }

            return Ok(dto);
        }

        // GET api/<CargosController>/5
        [HttpGet("{id}")]
        public  async Task<ActionResult<DtoCargos>> Get(string id)
        {
            var carg = await _context.Cargos.FindAsync(id);

            var dto = (DtoCargos)_mapper.Map<DtoCargos>(carg);
            if (dto == null)

            {
                return NotFound(id);
            }

            return Ok(dto);
        }

        // POST api/<CargosController>
        [HttpPost]
       
        [Route("add")]
        public async Task<ActionResult<HttpResponseMessage>> Post([FromBody] DtoCargosCreate value)
        {

            try
            {
                var cargos = _mapper.Map<Cargo>(value);
                cargos.CreationDate = DateTime.Now;
                cargos.EmpresaId = value.EmpresaId;
                cargos.Guid = Guid.NewGuid().ToString();
                _context.Cargos.Add(cargos);
                await _context.SaveChangesAsync();
                // Guardo remuneraciones
                value.Rem.cargoId = cargos.Guid;
                value.Rem.CreationDate = cargos.CreationDate;
                value.Rem.remuineracionTotal = value.Rem.sueldobase + value.Rem.horasextra + value.Rem.iees;
                _context.Remuneracions.Add(value.Rem);
                await _context.SaveChangesAsync();

            }
            catch (DbUpdateException ex)
            {
                return NotFound();
            }
            return Ok();

        }

        // PUT api/<CargosController>/5
        [HttpPut]
        [Route("update")]
        public async Task<ActionResult<HttpResponseMessage>> Put([FromBody] DtoCargosUpdate value)
        {
            try
            {
                var carg = await _context.Cargos.FindAsync(value.Guid);
                if (carg != null)
                {
                    var empresamapp = _mapper.Map<Empresa>(value);
                    carg.Code = empresamapp.Code;
                    carg.Name = empresamapp.Name;

                    await _context.SaveChangesAsync();
                }




            }
            catch (DbUpdateException ex)
            {
                return NotFound();
            }
            return Ok();

        }

        // DELETE api/<CargosController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DtoCargos>> Delete(int id)
        {

            var empresa = await _context.Empresa.FindAsync(id);
            if (empresa == null)
            {
                return NotFound();
            }

            _context.Empresa.Remove(empresa);
            await _context.SaveChangesAsync();

            return Ok(empresa.Name);
        }
    }
}
