using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Notification0015
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Message { get; set; }
    public DateTime NotificationDate { get; set; }
    public bool IsRead { get; set; }
}
