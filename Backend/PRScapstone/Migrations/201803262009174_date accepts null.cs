namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dateacceptsnull : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "DateCreated", c => c.DateTime());
            AlterColumn("dbo.Products", "DateUpdated", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "DateUpdated", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Products", "DateCreated", c => c.DateTime(nullable: false));
        }
    }
}
