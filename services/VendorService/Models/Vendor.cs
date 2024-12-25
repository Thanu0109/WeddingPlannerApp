using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Vendor0015
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Name { get; set; }
    public string ServiceType { get; set; } // e.g., Catering, Photography
    public string ContactInfo { get; set; }
    public DateTime ScheduledDate { get; set; }
}
