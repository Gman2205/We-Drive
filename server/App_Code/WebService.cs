using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BalProj;

/// <summary>
/// Summary description for WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{
    BalServce servce = new BalServce();

    public WebService()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string Login(string email, string password)
    {
        return servce.Login(email, password);
    }

    [WebMethod]
    public void Register(string name, string email, string password, string phone)
    {
        servce.Register(name, email, password, phone);
    }


}
