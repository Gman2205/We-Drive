using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DALProj
{
    // DBService
    public static class DalService
    {
        public static string Login(string email, string password)
        {
            if(email == "gad@gmail.com" && password == "123456")
            {
                return email;
            }
            return null;
        }
    }
}
