namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class defaultvalueforstatus : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.PurchaseRequests", "Status", c => c.String(maxLength: 15));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.PurchaseRequests", "Status", c => c.String(nullable: false, maxLength: 15));
        }
    }
}
