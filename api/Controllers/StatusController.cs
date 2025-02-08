using khaan.Context;
using khaan.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        private KhaanContext _khaanContext;

        public StatusController(KhaanContext khaanContext)
        {
            _khaanContext = khaanContext;
        }

        [HttpGet]
        public IEnumerable<Status> Get()
        {
            return _khaanContext.Statuses.Where(i => i.DeletedAt == null);
        }
        [HttpGet("{id}")]
        public Status Get(int id)
        {
            Status? status = _khaanContext.Statuses.FirstOrDefault(t => t.Id == id);
            return status is null ? new Status { TitleId = 0 ,Id = -1 } : status;

        }
        [HttpPost]
        public void Post([FromBody] Status status)
        {
            
            _khaanContext.Statuses.Add(status);
            _khaanContext.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Status status)
        {
            Status? searchStatus = _khaanContext.Statuses.FirstOrDefault(i => i.Id == id);
            if (searchStatus is not null)
            {
                searchStatus.Id = status.Id;
                searchStatus.TitleId = status.TitleId;
                _khaanContext.SaveChanges();
            }
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Status? status = _khaanContext.Statuses.FirstOrDefault(i => i.Id == id);
            if (status is not null)
            {
                status.DeletedAt = DateTime.Now;
                _khaanContext.SaveChanges();
            }
        }
    }
}