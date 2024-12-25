using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Threading.Tasks;
using System.Collections.Generic;
using EventService.Models; // Reference the Models namespace

[ApiController]
[Route("api/[controller]")]
public class EventController0015 : ControllerBase
{
    private readonly EventDbContext0015 _dbContext;

    public EventController0015(EventDbContext0015 dbContext)
    {
        _dbContext = dbContext;
    }

    // Add a new event
    [HttpPost("AddEvent0015")]
    public async Task<IActionResult> AddEvent0015([FromBody] Event0015 eventDetails)
    {
        await _dbContext.Events.InsertOneAsync(eventDetails);
        return Ok(eventDetails);
    }

    // Get all events
    [HttpGet("GetEvents0015")]
    public async Task<IActionResult> GetEvents0015()
    {
        var events = await _dbContext.Events.Find(_ => true).ToListAsync();
        return Ok(events);
    }

    // Update an event
    [HttpPut("UpdateEvent0015/{id}")]
    public async Task<IActionResult> UpdateEvent0015(string id, [FromBody] Event0015 updatedEvent)
    {
        var filter = Builders<Event0015>.Filter.Eq(e => e.Id, id);
        var result = await _dbContext.Events.ReplaceOneAsync(filter, updatedEvent);
        return result.MatchedCount > 0 ? Ok(updatedEvent) : NotFound();
    }

    // Delete an event
    [HttpDelete("DeleteEvent0015/{id}")]
    public async Task<IActionResult> DeleteEvent0015(string id)
    {
        var result = await _dbContext.Events.DeleteOneAsync(e => e.Id == id);
        return result.DeletedCount > 0 ? Ok() : NotFound();
    }
}
