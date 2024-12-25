using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Task0015
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Status { get; set; } // e.g., Pending, Completed
    public DateTime DueDate { get; set; }
}
