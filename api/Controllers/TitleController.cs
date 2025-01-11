using khaan.Context;
using khaan.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class TitleController : ControllerBase
    {
        private KhaanContext _khaanContext;

        public TitleController(KhaanContext khaanContext)
        {
            _khaanContext = khaanContext;
        }

        [HttpGet]
        public IEnumerable<Title> Get()
        {
            return _khaanContext.Titles.Where(t => t.DeletedAt == null);
        }
        [HttpGet("{id}")]
        public Title Get(int id)
        {
            Title? title = _khaanContext.Titles.FirstOrDefault(t => t.Id == id);
            return title is null ? new Title { Caption = "empty!" ,Id = -1 } : title;

        }
        [HttpPost]
        public void Post([FromBody] Title title)
        {
            _khaanContext.Titles.Add(title);
            _khaanContext.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Title title)
        {
            Title? searchPerson = _khaanContext.Titles.FirstOrDefault(t => t.Id == id);
            if (searchPerson is not null)
            {
                searchPerson.Id = title.Id;
                searchPerson.Caption = title.Caption;
                _khaanContext.SaveChanges();
            }
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Title? title = _khaanContext.Titles.FirstOrDefault(t => t.Id == id);
            if (title is not null)
            {
                title.DeletedAt = DateTime.Now;
                _khaanContext.SaveChanges();
            }
        }
    }
}