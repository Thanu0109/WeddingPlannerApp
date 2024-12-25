[ApiController]
[Route("api/[controller]")]
public class TaskController0015 : ControllerBase
{
    private readonly TaskDbContext0015 _dbContext;

    public TaskController0015(TaskDbContext0015 dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost("AddTask0015")]
    public async Task<IActionResult> AddTask0015([FromBody] Task0015 taskDetails)
    {
        await _dbContext.Tasks.InsertOneAsync(taskDetails);
        return Ok(taskDetails);
    }

    [HttpGet("GetTasks
