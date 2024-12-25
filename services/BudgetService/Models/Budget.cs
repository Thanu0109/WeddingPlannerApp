using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Budget0015
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public decimal TotalBudget { get; set; }
    public decimal SpentAmount { get; set; }
    public string Description { get; set; }
}
