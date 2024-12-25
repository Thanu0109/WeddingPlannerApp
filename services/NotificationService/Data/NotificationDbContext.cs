using MongoDB.Driver;
using NotificationService.Models;

public class NotificationDbContext0015
{
    private readonly IMongoDatabase _database;

    public NotificationDbContext0015(IConfiguration config)
    {
        var client = new MongoClient(config.GetConnectionString("MongoDB"));
        _database = client.GetDatabase(config["MongoDB:DatabaseName"]);
    }

    public IMongoCollection<Notification0015> Notifications =>
        _database.GetCollection<Notification0015>("Notifications");
}
