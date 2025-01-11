using khaan.Context;
using khaan.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class InstallmentTypeController : ControllerBase
    {
        private KhaanContext _khaanContext;

        public InstallmentTypeController(KhaanContext khaanContext)
        {
            _khaanContext = khaanContext;
        }

        [HttpGet]
        public IEnumerable<InstallmentType> Get()
        {
            return _khaanContext.InstallmentTypes.Where(i => i.DeletedAt == null);
        }
        [HttpGet("{id}")]
        public InstallmentType Get(int id)
        {
            InstallmentType? installmentType = _khaanContext.InstallmentTypes.FirstOrDefault(t => t.Id == id);
            return installmentType is null ? new InstallmentType { Title = null ,Id = -1 } : installmentType;

        }
        [HttpPost]
        public void Post([FromBody] InstallmentType installmentType)
        {
            _khaanContext.InstallmentTypes.Add(installmentType);
            _khaanContext.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] InstallmentType installmentType)
        {
            InstallmentType? searchInstallmentType = _khaanContext.InstallmentTypes.FirstOrDefault(i => i.Id == id);
            if (searchInstallmentType is not null)
            {
                searchInstallmentType.Id = installmentType.Id;
                searchInstallmentType.Title = installmentType.Title;
                _khaanContext.SaveChanges();
            }
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            InstallmentType? installmentType = _khaanContext.InstallmentTypes.FirstOrDefault(i => i.Id == id);
            if (installmentType is not null)
            {
                installmentType.DeletedAt = DateTime.Now;
                _khaanContext.SaveChanges();
            }
        }
    }
}