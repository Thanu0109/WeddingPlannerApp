using Ocelot.DependencyInjection; // Required for Ocelot configuration
using Ocelot.Middleware; // Required to use Ocelot middleware

var builder = WebApplication.CreateBuilder(args);

// Add Ocelot configuration from the ocelot.json file
builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);

// Register Ocelot services
builder.Services.AddOcelot();

var app = builder.Build();

// Use Ocelot middleware to route requests based on the ocelot.json configuration
app.UseOcelot().Wait();

app.Run();
