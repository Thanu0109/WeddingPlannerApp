using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Threading.Tasks;
using NotificationService.Models; // Reference the Models namespace

[ApiController]
[Route("api/[controller]")]
public class NotificationController0015 : ControllerBase
{
    private readonly NotificationDbContext0015 _dbContext;

    public NotificationController0015(NotificationDbContext0015 dbContext)
    {
        _dbContext = dbContext;
    }

    // Add a new notification
    [HttpPost("SendNotification0015")]
    public async Task<IActionResult> SendNotification0015([FromBody] Notification0015 notificationDetails)
    {
        await _dbContext.Notifications.InsertOneAsync(notificationDetails);
        return Ok(notificationDetails);
    }

    // Get all notifications
    [HttpGet("GetNotifications0015")]
    public async Task<IActionResult> GetNotifications0015()
    {
        var notifications = await _dbContext.Notifications.Find(_ => true).ToListAsync();
        return Ok(notifications);
    }

    // Get notifications by status (e.g., read/unread)
    [HttpGet("GetNotificationsByStatus0015/{isRead}")]
    public async Task<IActionResult> GetNotificationsByStatus0015(bool isRead)
    {
        var notifications = await _dbContext.Notifications
            .Find(n => n.IsRead == isRead)
            .ToListAsync();
        return Ok(notifications);
    }

    // Update the read status of a notification
    [HttpPut("UpdateNotificationStatus0015/{id}")]
    public async Task<IActionResult> UpdateNotificationStatus0015(string id, [FromBody] Notification0015 updatedNotification)
    {
        var filter = Builders<Notification0015>.Filter.Eq(n => n.Id, id);
        var result = await _dbContext.Notifications.ReplaceOneAsync(filter, updatedNotification);
        return result.MatchedCount > 0 ? Ok(updatedNotification) : NotFound();
    }

    // Delete a notification
    [HttpDelete("DeleteNotification0015/{id}")]
    public async Task<IActionResult> DeleteNotification0015(string id)
    {
        var result = await _dbContext.Notifications.DeleteOneAsync(n => n.Id == id);
        return result.DeletedCount > 0 ? Ok() : NotFound();
    }
}
