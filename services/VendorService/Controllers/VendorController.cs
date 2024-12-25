using VendorService.Models;
[ApiController]
[Route("api/[controller]")]
public class VendorController0015 : ControllerBase
{
    private readonly VendorDbContext0015 _dbContext;

    public VendorController0015(VendorDbContext0015 dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost("AddVendor0015")]
    public async Task<IActionResult> AddVendor0015([FromBody] Vendor0015 vendorDetails)
    {
        await _dbContext.Vendors.InsertOneAsync(vendorDetails);
        return Ok(vendorDetails);
    }

    [HttpGet("GetVendors0015")]
    public async Task<IActionResult> GetVendors0015()
    {
        var vendors = await _dbContext.Vendors.Find(_ => true).ToListAsync();
        return Ok(vendors);
    }
}
