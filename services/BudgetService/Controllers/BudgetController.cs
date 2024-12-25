using BudgetService.Models;
[ApiController]
[Route("api/[controller]")]
public class BudgetController0015 : ControllerBase
{
    private readonly BudgetDbContext0015 _dbContext;

    public BudgetController0015(BudgetDbContext0015 dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost("AddBudget")]
    public async Task<IActionResult> AddBudget0015([FromBody] Budget0015 budgetDetails)
    {
        await _dbContext.Budgets.InsertOneAsync(budgetDetails);
        return Ok(budgetDetails);
    }

    [HttpGet("GetBudgets0015")]
    public async Task<IActionResult> GetBudgets0015()
    {
        var budgets = await _dbContext.Budgets.Find(_ => true).ToListAsync();
        return Ok(budgets);
    }
}
