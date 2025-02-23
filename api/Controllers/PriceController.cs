using khaan.Context;
using khaan.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class PriceController : ControllerBase
    {
        private KhaanContext _khaanContext;

        public PriceController(KhaanContext khaanContext)
        {
            _khaanContext = khaanContext;
        }

        [HttpGet]
        public IEnumerable<Price> Get()
        {
            return _khaanContext.Prices.Where(i => i.DeletedAt == null);
        }
        [HttpGet("{id}")]
        public Price Get(int id)
        {
            Price? price = _khaanContext.Prices.FirstOrDefault(t => t.Id == id);
            return price is null ? new Price { TitleId = 0 ,Id = -1 } : price;

        }
        [HttpPost]
        public void Post([FromBody] Price price)
        {
            
            _khaanContext.Prices.Add(price);
            _khaanContext.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Price price)
        {
            Price? searchPrice = _khaanContext.Prices.FirstOrDefault(i => i.Id == id);
            if (searchPrice is not null)
            {
                searchPrice.Id = price.Id;
                searchPrice.TitleId = price.TitleId;
                searchPrice.Amount = price.Amount;
                _khaanContext.SaveChanges();
            }
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Price? price = _khaanContext.Prices.FirstOrDefault(i => i.Id == id);
            if (price is not null)
            {
                price.DeletedAt = DateTime.Now;
                _khaanContext.SaveChanges();
            }
        }
    }
}