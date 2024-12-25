using GuestService.Models;
public class GuestController0015 : ControllerBase
{
    private readonly GuestDbContext0015 _dbContext;

    public GuestController0015(GuestDbContext0015 dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost("AddGuest0015")]
    public async Task<IActionResult> AddGuest0015([FromBody] Guest0015 guestDetails)
    {
        await _dbContext.Guests.InsertOneAsync(guestDetails);
        return Ok(guestDetails);
    }
}
