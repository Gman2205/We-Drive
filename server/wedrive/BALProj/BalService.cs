using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALProj;


namespace BALProj
{
    public class BalService
    {
        public string Login(string email, string password)
        {
            return DalService.Login(email, password);
        }
    }
}
