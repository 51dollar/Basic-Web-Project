using Api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(o =>
        {
            o.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
        });
        builder.Services.AddDbContext<ApplicationDBContext>(opt =>
        {
            opt.UseSqlServer(builder.Configuration.GetConnectionString("DBConnection"));
        });
        builder.Services.AddControllers();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI(opt =>
            {
                opt.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                opt.RoutePrefix = string.Empty;
            });
        }

        app.UseHttpsRedirection();

        app.MapControllers();

        app.Run();
    }
}