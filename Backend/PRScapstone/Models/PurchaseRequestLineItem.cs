using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PRScapstone.Models
{
    public class PurchaseRequestLineItem
    {
        public int Id { get; set; }
        public int PurchaseRequestId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public bool Active { get; set; }
        // public DateTime? DateCreated { get; set; }
        // public DateTime? DateUpdated { get; set; }
        
        [JsonIgnore]
        public virtual PurchaseRequest Purchaserequest { get; set; }
        public virtual Product Product { get; set; }
    }
}