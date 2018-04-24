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
    public class PurchaseRequestLineItemsController : Controller
    {

        private AppDbContext db = new AppDbContext();
       
        //Total Calculation Function
        public void TotalCalculation(int id) {
            Product product = new Product(); // new product
            PurchaseRequest pr = new PurchaseRequest(); // new PR
            PurchaseRequestLineItem prli = db.PurchaseRequestLineItems.Find(id); // GET ID OF PURCHASE REQUEST LINE ITEM (single)
            product = db.Products.Find(prli.ProductId);
            pr = db.PurchaseRequests.Find(prli.PurchaseRequestId); // problem line          
            pr.Total = product.Price * prli.Quantity;
            db.SaveChanges();
            // P_Price * PRLI_Quantity = PR_Total
        }

        public void TotalCalculationv2(int id)
        {
            decimal total2 = 0;
            Product product = new Product(); // new product
            PurchaseRequest pr = new PurchaseRequest();
            PurchaseRequestLineItem prliID = db.PurchaseRequestLineItems.Find(id);
            //int y = prliID.PurchaseRequestId;
            List<PurchaseRequestLineItem> prliList = db.PurchaseRequestLineItems.Where(x => x.PurchaseRequestId == prliID.PurchaseRequestId).ToList();
            pr.Total = 0;
            foreach (PurchaseRequestLineItem p in prliList)
            {
                product = db.Products.Find(p.ProductId);
                pr = db.PurchaseRequests.Find(p.PurchaseRequestId);
                //decimal total = p.product.Price * p.Quantity;
                decimal total = product.Price * p.Quantity;
                total2 += total;
            }
            pr.Total = total2;
            db.SaveChanges();
            // P_Price * PRLI_Quantity = PR_Total
        }

        public void TotalCalculationv2_R(int id)
        {
            decimal total2 = 0;
            Product product = new Product(); // new product
            PurchaseRequest pr = new PurchaseRequest();
            PurchaseRequestLineItem prliID = db.PurchaseRequestLineItems.Find(id);
            //int y = prliID.PurchaseRequestId;
            List<PurchaseRequestLineItem> prliList = db.PurchaseRequestLineItems.Where(x => x.PurchaseRequestId == prliID.PurchaseRequestId).ToList();
            pr.Total = 0;
            foreach (PurchaseRequestLineItem p in prliList)
            {
                //product = db.Products.Find(p.ProductId);
                //pr = db.PurchaseRequests.Find(p.PurchaseRequestId);
                //decimal total = p.product.Price * p.Quantity;
                decimal total = product.Price * p.Quantity;
                total2 -= total;
            }
            pr.Total = total2;
            db.SaveChanges();
            // P_Price * PRLI_Quantity = PR_Total
        }

        // /PurchaseRequestLineItems/List
        public ActionResult List()
        {
 
            return new JsonNetResult { Data = db.PurchaseRequestLineItems.ToList() };
        }

        // /PurchaseRequestLineItems/Get/#
        public ActionResult Get(int? id)
        {
            if (id == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "FAILED", Message = "Id cannot be null." } };
            }
            PurchaseRequestLineItem prli = db.PurchaseRequestLineItems.Find(id);
            if (prli == null)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "Id not found." } };
            }
                return new JsonNetResult { Data = prli };
        }

        // /PurchaseRequestLineItems/Create [POST]
        public ActionResult Create([FromBody]PurchaseRequestLineItem prli)
        {
            //prli.DateCreated = DateTime.Now; // date created 
            //prli.DateUpdated = DateTime.Now; // updated
            if (!ModelState.IsValid)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = "ModelState invalid.", Data = ModelState } };
            }
            db.PurchaseRequestLineItems.Add(prli);
            try
            {
                db.SaveChanges();
                TotalCalculationv2(prli.Id);
            }
            catch (Exception ex)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }
            return Json(new JsonMessage("Sucess", "PRLI was created."));
        }

        // /PurchasRequestLineItems/Change/# [POST]
        public ActionResult Change([FromBody]PurchaseRequestLineItem prli)
        {
            if (prli.Product == null) return new EmptyResult();
            PurchaseRequestLineItem prli2 = db.PurchaseRequestLineItems.Find(prli.Id);
            prli2.PurchaseRequestId = prli.PurchaseRequestId;
            prli2.ProductId = prli.ProductId;
            prli2.Quantity = prli.Quantity;
            prli2.Active = prli.Active;
            //prli2.DateUpdated = DateTime.Now;
            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }
            TotalCalculationv2(prli.Id);
            return new JsonNetResult { Data = new Msg { Result = "Success", Message = "Changed." } };
        }

        // /PurchaseRequestLineItems/Remove/# [POST]
        public ActionResult Remove([FromBody]PurchaseRequestLineItem prli)
        {
            if (prli.Product == null) return new EmptyResult();
            PurchaseRequestLineItem prli2 = db.PurchaseRequestLineItems.Find(prli.Id);
            db.PurchaseRequestLineItems.Remove(prli2);
            prli2.Quantity = 0;
            TotalCalculationv2(prli.Id);

            try
            {
                db.SaveChanges();
                TotalCalculationv2(prli.Id);
            }
            catch (Exception ex)
            {
                return new JsonNetResult { Data = new Msg { Result = "Failed", Message = ex.Message } };
            }

            return new JsonNetResult { Data = new Msg { Result = "Success", Message = "Removed." } };
        }


    }
}
// PURCHASE REQUEST TOTAL NOT BEING REMOVED


/* private void lksdjflksdf(int prId) {
    db = new PrsDbContext();
    var purchaseRequest = db.PurchaseRequests.Find(prId);
    purchaseRequest.Total = purchaseRequest.PurchaseRequestLineItems.Sum(prli => prli.Qunatity * prli.Product.Price);
    try
    {
        db.SaveChanges();
    }
    catch (Exception ex) {
        throw ex;
    }
} */