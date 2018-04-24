export class Vendor {
  Id: number;
  Code: string;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: string;
  Phone: string;
  Email: string;
  PreApproved: boolean;
  Active: boolean;

  constructor(
    Id: number,
    Code: string,
    Name: string,
    Address: string,
    City: string,
    State: string,
    Zipcode: string,
    Phone: string,
    Email: string,
    PreApproved: boolean,
    Active: boolean
  ) {
  this.Id = Id;
  this.Code = Code;
  this.Name = Name;
  this.Address = Address;
  this.City = City;
  this.State = State;
  this.Zipcode = Zipcode;
  this.Phone = Phone;
  this.Email = Email;
  this.PreApproved = PreApproved;
  this.Active = Active;
  }
}
