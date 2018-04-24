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
    public class PurchaseRequestsController : Controller
    {

        private AppDbContext db = new AppDbContext();

        // /PurchaseRequest/List
        public ActionResult List()
        {
            return new JsonNetResult { Data = db.PurchaseRequests.ToList() };

        }

        // /PurchaseRequest/Get/#
        public ActionResult Get(int? id)
        {
            if (id == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "Id cannot be null." } };
            }
            PurchaseRequest purchaserequest = db.PurchaseRequests.Find(id);
            if (purchaserequest == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "Id not found." } };
            }
            return new JsonNetResult { Data = purchaserequest };
        }

        // /PurchaseRequest/Create [POST]
        public ActionResult Create([FromBody]PurchaseRequest purchaserequest)
        {
            //purchaserequest.DateCreated = DateTime.Now; // date created 
            PurchaseRequest pr2 = purchaserequest;
            if (!ModelState.IsValid)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "ModelState invalid.", Data = ModelState } };
            }
            db.PurchaseRequests.Add(purchaserequest);
            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                // String innerMessage = (ex.InnerException != null)
                //       ? ex.InnerException.Message
                //       : "";
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }
            return new JsonNetResult { Data = new Msg { Result = "Success", Message = "Created." } };
        }


        // /PurchaseRequest/Change/# [POST]
        public ActionResult Change([FromBody]PurchaseRequest purchaserequest)
        {
            if (purchaserequest.Description == null) return new EmptyResult();
            PurchaseRequest pr2 = db.PurchaseRequests.Find(purchaserequest.Id);
            pr2.UserId = purchaserequest.UserId;
            pr2.Description = purchaserequest.Description;
            pr2.Justification = purchaserequest.Justification;
            pr2.DeliveryMode = purchaserequest.DeliveryMode;
            pr2.Status = purchaserequest.Status;
            pr2.Total = purchaserequest.Total;
            pr2.Active = purchaserequest.Active;
            pr2.ReasonForRejection = purchaserequest.ReasonForRejection;
            //pr2.DateUpdated = DateTime.Now;
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


        // /Purchase Request/Remove/# [POST]
        public ActionResult Remove([FromBody]PurchaseRequest purchaserequest)
        {
            if (purchaserequest.Description == null) { return new EmptyResult(); }
            PurchaseRequest pr2 = db.PurchaseRequests.Find(purchaserequest.Id);
            db.PurchaseRequests.Remove(pr2);
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
        public ActionResult ReviewList()
        {
                return new JsonNetResult { Data = db.PurchaseRequests.Where(x => x.Status == "PENDING" || x.Status == "NEW") };
        }
    }
}