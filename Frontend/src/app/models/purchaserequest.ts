import { User } from './user';
import { PRLI } from './prli';

export class PurchaseRequest {
  Id: number;
  UserId: number;
  Description: string;
  Justification: string;
  DeliveryMode: string;
  Status: string;
  Total: number;
  Active: boolean;
  ReasonForRejection: string;
  User: User;
  PrliList: PRLI[];

  constructor(
    Id: number,
    UserId: number,
    Description: string,
    Justification: string,
    DeliveryMode: string,
    Status: string,
    Total: number,
    Active: boolean,
    ReasonForRejection: string
  ) {
    this.Id = Id;
    this.UserId = UserId;
    this.Description = Description;
    this.Justification = Justification;
    this.DeliveryMode = DeliveryMode;
    this.Status = Status;
    this.Total = Total;
    this.Active = Active;
    this.ReasonForRejection = ReasonForRejection;
  }
}
