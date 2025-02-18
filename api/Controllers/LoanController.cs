using khaan.Context;
using khaan.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private KhaanContext _khaanContext;

        public LoanController(KhaanContext khaanContext)
        {
            _khaanContext = khaanContext;
        }

        [HttpGet]
        public IEnumerable<Loan> Get()
        {
            return _khaanContext.Loans.Where(i => i.DeletedAt == null);
        }
        [HttpGet("{id}")]
        public Loan Get(int id)
        {
            Loan? loan = _khaanContext.Loans.FirstOrDefault(t => t.Id == id);
            return loan is null ? new Loan { InstallmentTypeId = 0, PriceId = 0, TitleId = 0 } : loan;

        }
        [HttpPost]
        public void Post([FromBody] Loan loan)
        {

            _khaanContext.Loans.Add(loan);
            _khaanContext.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Loan loan)
        {
            Loan? searchLoan = _khaanContext.Loans.FirstOrDefault(i => i.Id == id);
            if (searchLoan is not null)
            {
                searchLoan.Id = loan.Id;
                searchLoan.PriceId = loan.PriceId;
                _khaanContext.SaveChanges();
            }
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Loan? loan = _khaanContext.Loans.FirstOrDefault(i => i.Id == id);
            if (loan is not null)
            {
                loan.DeletedAt = DateTime.Now;
                _khaanContext.SaveChanges();
            }
        }
    }
}