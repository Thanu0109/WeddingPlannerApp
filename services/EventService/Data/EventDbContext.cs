using EventService.Models;
using MongoDB.Driver;

public class EventDbContext0015
{
    private readonly IMongoDatabase _database;
    private readonly MongoClient _mongoClient;

    public EventDbContext0015(IConfiguration config)
    {
        _mongoClient = new MongoClient(config.GetConnectionString("MongoDB"));
        _database = _mongoClient.GetDatabase(config["MongoDB:DatabaseName"]);
    }

    public IMongoCollection<Event0015> Events =>
        _database.GetCollection<Event0015>("Events");

    public void Dispose()
    {
        _mongoClient?.Dispose();
    }
}
    public IMongoCollection<Event0015> Events =>
        _database.GetCollection<Event0015>("Events");
}

