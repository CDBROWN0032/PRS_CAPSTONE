namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PRLIdbfix : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.PurchaseRequestLineItems", "DateCreated", c => c.DateTime());
            AlterColumn("dbo.PurchaseRequestLineItems", "DateUpdated", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.PurchaseRequestLineItems", "DateUpdated", c => c.DateTime(nullable: false));
            AlterColumn("dbo.PurchaseRequestLineItems", "DateCreated", c => c.DateTime(nullable: false));
        }
    }
}
