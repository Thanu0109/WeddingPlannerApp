using MongoDB.Driver;
using BudgetService.Models; 

public class BudgetDbContext0015
{
    private readonly IMongoDatabase _database;

    public BudgetDbContext0015(IConfiguration config)
    {
        var client = new MongoClient(config.GetConnectionString("MongoDB"));
        _database = client.GetDatabase(config["MongoDB:DatabaseName"]);
    }

    public IMongoCollection<Budget0015> Budgets =>
        _database.GetCollection<Budget0015>("Budgets");
}
