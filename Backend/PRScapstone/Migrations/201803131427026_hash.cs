namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class hash : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Pw_Hash", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "Pw_Hash");
        }
    }
}
