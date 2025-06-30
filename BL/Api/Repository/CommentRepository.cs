using Api.Data;
using Api.Interfaces;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDBContext _dbContext;

        public CommentRepository(ApplicationDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public async Task<List<Comment>> GetAllAsync()
        {
            return await _dbContext.Comments.ToListAsync();
        }

        public async Task<Comment?> GetByIdAsync(int id)
        {
            return await _dbContext.Comments.FindAsync(id);
        }
    }
}