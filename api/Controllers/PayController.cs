using khaan.Context;
using khaan.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class PayController : ControllerBase
    {
        private KhaanContext _khaanContext;

        public PayController(KhaanContext khaanContext)
        {
            _khaanContext = khaanContext;
        }

        [HttpGet]
        public IEnumerable<Pay> Get()
        {
            return _khaanContext.Pays.Where(i => i.DeletedAt == null);
        }
        [HttpGet("{id}")]
        public Pay Get(int id)
        {
            Pay? pay = _khaanContext.Pays.FirstOrDefault(t => t.Id == id);
            return pay is null ? new Pay { Date = DateTime.Now, InstallmentDate = DateTime.Now, LoanId = 0, PersonId = 0, PriceId = 0, StatusId = 0, TraceNumber = "" } : pay;

        }
        [HttpPost]
        public void Post([FromBody] Pay pay)
        {

            _khaanContext.Pays.Add(pay);
            _khaanContext.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Pay pay)
        {
            Pay? searchPay = _khaanContext.Pays.FirstOrDefault(i => i.Id == id);
            if (searchPay is not null)
            {
                searchPay.Id = pay.Id;
                searchPay.PriceId = pay.PriceId;
                _khaanContext.SaveChanges();
            }
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Pay? pay = _khaanContext.Pays.FirstOrDefault(i => i.Id == id);
            if (pay is not null)
            {
                pay.DeletedAt = DateTime.Now;
                _khaanContext.SaveChanges();
            }
        }
    }
}