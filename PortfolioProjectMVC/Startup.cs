using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PortfolioProjectMVC.Startup))]
namespace PortfolioProjectMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
