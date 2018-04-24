namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addeddatecreatedandchanged : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Products", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Vendors", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Vendors", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.PurchaseRequestLineItems", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.PurchaseRequestLineItems", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.PurchaseRequests", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.PurchaseRequests", "DateUpdated", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.PurchaseRequests", "DateUpdated");
            DropColumn("dbo.PurchaseRequests", "DateCreated");
            DropColumn("dbo.PurchaseRequestLineItems", "DateUpdated");
            DropColumn("dbo.PurchaseRequestLineItems", "DateCreated");
            DropColumn("dbo.Vendors", "DateUpdated");
            DropColumn("dbo.Vendors", "DateCreated");
            DropColumn("dbo.Products", "DateUpdated");
            DropColumn("dbo.Products", "DateCreated");
        }
    }
}
