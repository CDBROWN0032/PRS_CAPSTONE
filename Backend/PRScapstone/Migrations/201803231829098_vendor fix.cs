namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class vendorfix : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Vendors", "DateCreated");
            DropColumn("dbo.Vendors", "DateUpdated");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Vendors", "DateUpdated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Vendors", "DateCreated", c => c.DateTime(nullable: false));
        }
    }
}
