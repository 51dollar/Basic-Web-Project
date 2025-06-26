using Api.Data;
using Api.Interfaces;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDBContext _dbContext;

        public StockRepository(ApplicationDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<List<Stock>> GetAllAsync()
        {
            return _dbContext.Stocks.ToListAsync();
        }
    }
}