using MongoDB.Driver;
using TaskService.Models;

public class TaskDbContext0015
{
    private readonly IMongoDatabase _database;

    public TaskDbContext0015(IConfiguration config)
    {
        var client = new MongoClient(config.GetConnectionString("MongoDB"));
        _database = client.GetDatabase(config["MongoDB:DatabaseName"]);
    }

    public IMongoCollection<Task0015> Tasks =>
        _database.GetCollection<Task0015>("Tasks");
}
