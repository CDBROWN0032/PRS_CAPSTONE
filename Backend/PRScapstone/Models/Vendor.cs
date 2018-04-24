using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PRScapstone.Models
{
    public class Vendor
    {
        public int Id { get; set; }
        [Index(IsUnique = true)]
        [StringLength(10)]
        [Required]
        public string Code { get; set; }
        [Required][StringLength(255)]
        public string Name { get; set; }
        [Required][StringLength(255)]
        public string Address { get; set; }
        [Required][StringLength(255)]
        public string City { get; set; }
        [Required][StringLength(2)]
        public string State { get; set; }
        [Required][StringLength(5)]
        public string Zipcode { get; set; }
        [Required][StringLength(12)]
        public string Phone { get; set; }
        [Required][StringLength(100)]
        public string Email { get; set; }
        [Required]
        public bool PreApproved { get; set; }
        [Required]
        public bool Active { get; set; }
        //public DateTime DateCreated { get; set; }
        //public DateTime DateUpdated { get; set; }

    }
}