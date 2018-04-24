namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class usertestdata : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Products", "PartNumber", unique: true);
        }
        
        public override void Down()
        {
            DropIndex("dbo.Products", new[] { "PartNumber" });
        }
    }
}
