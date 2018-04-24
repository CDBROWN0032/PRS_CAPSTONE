import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';
import { VendorService } from './services/vendor.service';
import { ProductService } from './services/product.service';
import { PurchaserequestService } from './services/purchaserequest.service';
import { PrliService } from './services/prli.service';
import { SystemService } from './services/system.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './support/about/about.component';
import { HomeComponent } from './support/home/home.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { PurchaserequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';

import { PrliCreateComponent } from './purchaserequestlineitem/prli-create/prli-create.component';
import { PrliEditComponent } from './purchaserequestlineitem/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './purchaserequestlineitem/prli-detail/prli-detail.component';
import { PrliListComponent } from './purchaserequestlineitem/prli-list/prli-list.component';

import { MenuItemComponent } from './support/menu/menu-item.component';
import { MenuComponent } from './support/menu/menu.component';
import { PurchaserequestLinesComponent } from './purchaserequest/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaserequestReviewComponent } from './purchaserequest/purchaserequest-review/purchaserequest-review.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { PurchaserequestReviewItemComponent } from './purchaserequest/purchaserequest-review-item/purchaserequest-review-item.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    MenuComponent,
    MenuItemComponent,
    PurchaserequestListComponent,
    PurchaserequestEditComponent,
    PurchaserequestDetailComponent,
    PurchaserequestCreateComponent,
    PurchaserequestLinesComponent,
    PrliCreateComponent,
    PrliEditComponent,
    PrliDetailComponent,
    PrliListComponent,
    PurchaserequestLinesComponent,
    PurchaserequestReviewComponent,
    UserLoginComponent,
    PurchaserequestReviewItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaserequestService,
    SystemService,
    PrliService,
    SystemService,
    AuthGuard,
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
