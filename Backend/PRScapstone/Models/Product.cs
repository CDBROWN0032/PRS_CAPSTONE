using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PRScapstone.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public int VendorId { get; set; }
        [Required][StringLength(50)]
        [Index(IsUnique = true)]
        public string PartNumber { get; set; }
        [Required][StringLength(150)]
        public string Name { get; set; }
        [Required]
        public decimal Price { get; set; } //TODO MAKE NOT ABLE TO BE NEGATIVE
        [Required][StringLength(255)]
        public string Unit { get; set; }
        [StringLength(255)]
        public string PhotoPath { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }

        public virtual Vendor vendor { get; set;  }
    }
}