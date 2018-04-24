namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class debugging : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Users", "DateCreated");
            DropColumn("dbo.Users", "DateUpdated");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "DateUpdated", c => c.DateTime());
            AddColumn("dbo.Users", "DateCreated", c => c.DateTime());
        }
    }
}
