import { Product } from './product';
import { PurchaseRequest } from './purchaserequest';

export class PRLI {
  Id: number;
  PurchaseRequestId: number;
  ProductId: number;
  Quantity: number;
  Active: boolean;
  Product: Product;
  PurchaseRequest: PurchaseRequest;


constructor(
  Id: number,
  PurchaseRequestId: number,
  ProductId: number,
  Quantity: number,
  Active: boolean,

) {
  this.Id = Id;
  this.PurchaseRequestId = PurchaseRequestId;
  this.ProductId = ProductId;
  this.Quantity = Quantity;
  this.Active = Active;
  }
}
