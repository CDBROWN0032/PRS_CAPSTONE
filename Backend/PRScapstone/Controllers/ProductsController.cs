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
    public class ProductsController : Controller
    {

        private AppDbContext db = new AppDbContext();

        // /Products/List
        public ActionResult List()
        {
            return new JsonNetResult { Data = db.Products.ToList() };
        }

        // /Products/Get/#
        public ActionResult Get(int? id)
        {
            if (id == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "FAILED", Message = "Id cannot be null." } };
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "Id not found." } };
            }
            return new JsonNetResult { Data = product };
        }
        // /Products/Create [POST]
        public ActionResult Create([FromBody]Product product)
        {
            //product.DateCreated = DateTime.Now; // date created 
            Product test = product;
            if (!ModelState.IsValid)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "ModelState invalid.", Data = ModelState } };
            }
            db.Products.Add(product);
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

        // /Products/Change/# [POST]
        public ActionResult Change([FromBody]Product product)
        {
            if (product.PartNumber == null) return new EmptyResult();
            Product product2= db.Products.Find(product.Id);
            product2.VendorId = product.VendorId;
            product2.PartNumber = product.PartNumber;
            product2.Name = product.Name;
            product2.Price = product.Price;
            product2.Unit = product.Unit;
            product2.PhotoPath = product.PhotoPath;
            product2.Active = product.Active;
            product2.DateUpdated = DateTime.Now;
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

        // /Products/Remove/# [POST]
        public ActionResult Remove([FromBody]Product product)
        {
            if (product.PartNumber == null) return new EmptyResult();
            Product product2 = db.Products.Find(product.Id);
            db.Products.Remove(product2);
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