using PRScapstone.Models;
using PRScapstone.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Security;
using System.Security.Cryptography;
using System.Text;
using Utility;

namespace PRScapstone.Controllers
{
    public class UsersController : Controller {

        private AppDbContext db = new AppDbContext();

        public string Hash(string password) //SHA512 hash
        {
            var bytes = new UTF8Encoding().GetBytes(password);
            byte[] hashBytes;
            using (var algorithm = new System.Security.Cryptography.SHA512Managed())
            {
                hashBytes = algorithm.ComputeHash(bytes);
            }
            return Convert.ToBase64String(hashBytes);
        }

        // /Users/List
        public ActionResult List()
        {
            return new JsonNetResult { Data = db.Users.ToList() };
        }

        // /Users/Get/#
        public ActionResult Get(int? id)
        {
            if (id == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "FAILED", Message = "Id cannot be null." } };
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "Id not found." } };
            }
            return new JsonNetResult { Data = user };
        }
        // /Users/Create [POST]
        public ActionResult Create([FromBody]User user)
        {
            //user.DateCreated = DateTime.Now; // date created 
            //user.DateUpdated = DateTime.Now;
            //user.Pw_Hash = Hash(user.Password);
            //User user2 = user;
            if (!ModelState.IsValid)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "ModelState invalid.", Data = ModelState } };
            }
            db.Users.Add(user);
            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }
            return Json(new JsonMessage("Sucess", "User was created."));
        }

        // /Users/Change/# [POST]
        public ActionResult Change([FromBody]User user)
        {
            if (user.Username == null) return new EmptyResult();
            User user2 = db.Users.Find(user.Id);
            user2.Username = user.Username;
            user2.Password = user.Password;
            user2.FirstName = user.FirstName;
            user2.LastName = user.LastName;
            user2.Phone = user.Phone;
            user2.Email = user.Email;
            user2.IsReviewer = user.IsReviewer;
            user2.IsAdmin = user.IsAdmin;
            user2.Active = user.Active;
            //user2.DateUpdated = DateTime.Now;
            //Hash(user2.Password);
            //user2.Pw_Hash = Hash(user2.Password);
            
            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }
            return new JsonNetResult { Data = new Msg { Result = "Success", Message = "Changed." } };
        }

        // /Users/Remove/# [POST]
        public ActionResult Remove([FromBody]User user)
        {
            if (user.Username == null) { return new EmptyResult(); }
            User user2 = db.Users.Find(user.Id);
            db.Users.Remove(user2);
            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }
            return new JsonNetResult { Data = new Msg { Result = "Success", Message = "Removed." } };
        }

        //Users/Login?username=<>&password=<>
        public ActionResult Login(string username, string password) {
            User login = db.Users.Where(x => x.Username == username).FirstOrDefault();
            User pw = db.Users.Where(x => x.Password == password).FirstOrDefault();
            // string Pw_Hash = Hash(password);
            // User pw = db.Users.Where(x => x.Pw_Hash == Pw_Hash).FirstOrDefault();
            if (login == null || pw == null)
            {
                return Json(new JsonMessage("FAILURE", "Invalid Credentials"), JsonRequestBehavior.AllowGet);
            }
            if (login.Id == pw.Id)
            {
                return Json(new JsonMessage("SUCCESS", "Access Granted"), JsonRequestBehavior.AllowGet);
            }
            else {
                return Json(new JsonMessage("FAILURE", "Invalid Credentials"), JsonRequestBehavior.AllowGet);
            } 
        }
    }
}

//if (user.Username == null) return new EmptyResult();


//TODO REINTRODUCE DATECREATED/UPDATED
//TODO REINTRODUCE PASSWORD HASH
//TODO REINTRODUCE LOGIN 