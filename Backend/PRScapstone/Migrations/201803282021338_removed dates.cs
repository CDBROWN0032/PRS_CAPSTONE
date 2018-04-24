namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removeddates : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.PurchaseRequestLineItems", "DateCreated");
            DropColumn("dbo.PurchaseRequestLineItems", "DateUpdated");
            DropColumn("dbo.PurchaseRequests", "DateCreated");
            DropColumn("dbo.PurchaseRequests", "DateUpdated");
        }
        
        public override void Down()
        {
            AddColumn("dbo.PurchaseRequests", "DateUpdated", c => c.DateTime());
            AddColumn("dbo.PurchaseRequests", "DateCreated", c => c.DateTime());
            AddColumn("dbo.PurchaseRequestLineItems", "DateUpdated", c => c.DateTime());
            AddColumn("dbo.PurchaseRequestLineItems", "DateCreated", c => c.DateTime());
        }
    }
}
