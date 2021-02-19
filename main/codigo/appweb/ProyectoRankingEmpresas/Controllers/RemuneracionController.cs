using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProyectoRankingEmpresas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RemuneracionController : ControllerBase
    {
        // GET: api/<RemuneracionController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<RemuneracionController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RemuneracionController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RemuneracionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RemuneracionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
