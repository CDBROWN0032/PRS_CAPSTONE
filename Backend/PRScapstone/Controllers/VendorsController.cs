using PRScapstone.Models;
using PRScapstone.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Utility;

namespace PRScapstone.Controllers
{
    public class VendorsController : Controller
    {

        private AppDbContext db = new AppDbContext();

        // /Vendors/List
        public ActionResult List()
        {
            return new JsonNetResult { Data = db.Vendors.ToList() };
        }

        // /Vendors/Get/#
        public ActionResult Get(int? id)
        {
            if (id == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "FAILED", Message = "Id cannot be null." } };
            }
            Vendor vendor = db.Vendors.Find(id);
            if (vendor == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "Id not found." } };
            }
            return new JsonNetResult { Data = vendor };
        }
        // /Vendors/Create [POST]
        public ActionResult Create([FromBody]Vendor vendor)
        {
            //vendor.DateCreated = DateTime.Now; // date created 
            if (!ModelState.IsValid)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "ModelState invalid.", Data = ModelState } };
            }
            db.Vendors.Add(vendor);
            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }
            return Json(new JsonMessage("Sucess", "Vendor was created."));
        }

        // /Vendors/Change/# [POST]
        public ActionResult Change([FromBody]Vendor vendor)
        {
            if (vendor.Name == null) return new EmptyResult();
            Vendor vendor2 = db.Vendors.Find(vendor.Id);
            vendor2.Code = vendor.Code;
            vendor2.Name = vendor.Name;
            vendor2.Address = vendor.Address;
            vendor2.City = vendor.City;
            vendor2.State = vendor.State;
            vendor2.Zipcode = vendor.Zipcode;
            vendor2.Phone = vendor.Phone;
            vendor2.Email = vendor.Email;
            vendor2.PreApproved = vendor.PreApproved;
            vendor2.Active = vendor.Active;
            //vendor2.DateUpdated = DateTime.Now;
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

        // /Vendors/Remove/# [POST]
        public ActionResult Remove([FromBody]Vendor vendor)
        {
            if (vendor.Name == null) { return new EmptyResult(); }
            Vendor vendor2 = db.Vendors.Find(vendor.Id);
            db.Vendors.Remove(vendor2);
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
    }
}