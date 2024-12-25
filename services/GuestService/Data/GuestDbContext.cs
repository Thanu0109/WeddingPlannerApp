using MongoDB.Driver;
using GuestService.Models;

public class GuestDbContext0015
{
    private readonly IMongoDatabase _database;

    public GuestDbContext0015(IConfiguration config)
    {
        var client = new MongoClient(config.GetConnectionString("MongoDB"));
        _database = client.GetDatabase(config["MongoDB:DatabaseName"]);
    }

    public IMongoCollection<Guest0015> Guests =>
        _database.GetCollection<Guest0015>("Guests");
}
