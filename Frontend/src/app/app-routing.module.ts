import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { PurchaserequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestLinesComponent } from './purchaserequest/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaserequestReviewComponent } from './purchaserequest/purchaserequest-review/purchaserequest-review.component';


import { PrliCreateComponent } from './purchaserequestlineitem/prli-create/prli-create.component';
import { PrliDetailComponent } from './purchaserequestlineitem/prli-detail/prli-detail.component';
import { PrliEditComponent } from './purchaserequestlineitem/prli-edit/prli-edit.component';
import { PrliListComponent } from './purchaserequestlineitem/prli-list/prli-list.component';

import {HomeComponent} from './support/home/home.component';
import {AboutComponent} from './support/about/about.component';
import { PurchaserequestReviewItemComponent } from './purchaserequest/purchaserequest-review-item/purchaserequest-review-item.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  { path: '', redirectTo: '/users/login', pathMatch: 'full'},

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},

  { path: 'products/detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard]},
  { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  { path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard]},
  { path: 'products/create', component: ProductCreateComponent, canActivate: [AuthGuard]},

  { path: 'purchaserequests/detail/:id', component: PurchaserequestDetailComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequests/edit/:id', component: PurchaserequestEditComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequests/lines/:id', component: PurchaserequestLinesComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequests/list', component: PurchaserequestListComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequests/create', component: PurchaserequestCreateComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequests/reviewitem/:id', component: PurchaserequestReviewItemComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequests/reviewlist', component: PurchaserequestReviewComponent, canActivate: [AuthGuard]},

  { path: 'purchaserequestlineitems/detail/:id', component: PrliDetailComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequestlineitems/edit/:id', component: PrliEditComponent , canActivate: [AuthGuard]},
  { path: 'purchaserequestlineitems/list', component: PrliListComponent, canActivate: [AuthGuard]},
  { path: 'purchaserequestlineitems/create', component: PrliCreateComponent, canActivate: [AuthGuard]},

  { path: 'users/detail/:id', component: UserDetailComponent, canActivate: [AuthGuard]},
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  { path: 'users/list', component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'users/create', component: UserCreateComponent, canActivate: [AuthGuard]},
  { path: 'users/login', component: UserLoginComponent},

  { path: 'vendors/detail/:id', component: VendorDetailComponent, canActivate: [AuthGuard]},
  { path: 'vendors/edit/:id', component: VendorEditComponent, canActivate: [AuthGuard]},
  { path: 'vendors/list', component: VendorListComponent, canActivate: [AuthGuard]},
  { path: 'vendors/create', component: VendorCreateComponent, canActivate: [AuthGuard]},

  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
