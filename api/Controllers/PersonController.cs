using khaan.Context;
using khaan.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private KhaanContext _khaanContext;

        public PersonController(KhaanContext khaanContext)
        {
            _khaanContext = khaanContext;
        }

        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return _khaanContext.Persons.Where(x => x.DeletedAt == null);
        }
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            Person? person = _khaanContext.Persons.FirstOrDefault(p => p.Id == id);
            return person is null ? new Person { Id = -1 } : person;

        }
        [HttpPost]
        public void Post([FromBody] Person person)
        {
            _khaanContext.Persons.Add(person);
            _khaanContext.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Person person)
        {
            Person? searchPerson = _khaanContext.Persons.FirstOrDefault(p => p.Id == id);
            if (searchPerson is not null)
            {
                searchPerson.FirstName = person.FirstName;
                searchPerson.LastName = person.LastName;
                searchPerson.Phone = person.Phone;
                _khaanContext.SaveChanges();
            }
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Person? person = _khaanContext.Persons.FirstOrDefault(p => p.Id == id);
            if (person is not null)
            {
                person.DeletedAt = DateTime.Now;
                _khaanContext.SaveChanges();
            }
        }
    }
}