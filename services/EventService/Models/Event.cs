using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Event0015
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Name { get; set; }
    public DateTime Date { get; set; }
    public string Venue { get; set; }
    public string Type { get; set; }
}
