using MongoDB.Driver;
using VendorService.Models;

public class VendorDbContext0015
{
    private readonly IMongoDatabase _database;

    public VendorDbContext0015(IConfiguration config)
    {
        var client = new MongoClient(config.GetConnectionString("MongoDB"));
        _database = client.GetDatabase(config["MongoDB:DatabaseName"]);
    }

    public IMongoCollection<Vendor0015> Vendors =>
        _database.GetCollection<Vendor0015>("Vendors");
}

