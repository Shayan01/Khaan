using khaan.Context;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(op => op.AddPolicy("AllOrigin", b =>
{
    b.AllowAnyOrigin();


    b.AllowAnyMethod();
    b.AllowAnyHeader();
}));

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
System.Console.WriteLine("123" + "Data Source=" + Environment.CurrentDirectory + System.IO.Path.DirectorySeparatorChar + "db.db");

builder.Services.AddControllers();
// builder.Services.AddDbContext<KhaanContext>(o => o.UseSqlite(builder.Configuration.GetConnectionString("Sqlite")));
builder.Services.AddDbContext<KhaanContext>(o => o.UseSqlite("Data Source=" + Environment.CurrentDirectory + System.IO.Path.DirectorySeparatorChar + "db.db"));
// builder.Services.AddDbContext<KhaanContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("MSSQL")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{


}
app.UseSwagger();
app.UseSwaggerUI();

// app.UseHttpsRedirection();
app.UseCors("AllOrigin");
app.UseAuthorization();
app.UseAuthentication();
app.MapControllers();
app.Run();


