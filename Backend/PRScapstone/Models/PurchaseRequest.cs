using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PRScapstone.Models
{
    public class PurchaseRequest
    {
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required][StringLength(100)]
        public string Description { get; set; }

        [Required][StringLength(255)]
        public string Justification { get; set; } //TODO date needed skipped/optional

        [Required][StringLength(25)]
        public string DeliveryMode { get; set; }

        // [Required]
        [StringLength(15)]
        public string Status { get; set; }

        [Required]
        public decimal Total { get; set; }

        [Required]
        public bool Active { get; set; } // TODO default true value?

        [StringLength(100)]
        public string ReasonForRejection { get; set; }

        // public DateTime? DateCreated { get; set; }

        // public DateTime? DateUpdated { get; set; }

        public virtual User User { get; set; }

        public virtual List<PurchaseRequestLineItem> PrliList { get; set; }

        public PurchaseRequest ()
        {
            Status = "NEW";
        }
    }
}