namespace PRScapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class debugingpw_hash : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Users", "Pw_Hash");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "Pw_Hash", c => c.String());
        }
    }
}
