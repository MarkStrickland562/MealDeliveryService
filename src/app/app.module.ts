import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { ShowRestaurantsComponent } from './show-restaurants/show-restaurants.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { ShowOrderDetailsComponent } from './show-order-details/show-order-details.component';
import { NewOrderDetailComponent } from './new-order-detail/new-order-detail.component';
import { EditOrderDetailComponent } from './edit-order-detail/edit-order-detail.component';
import { DeleteOrderDetailComponent } from './delete-order-detail/delete-order-detail.component';
import { SearchOrderDetailComponent } from './search-order-detail/search-order-detail.component';
import { ShowMenuItemsComponent } from './show-menu-items/show-menu-items.component';
import { NewMenuItemComponent } from './new-menu-item/new-menu-item.component';
import { EditMenuItemComponent } from './edit-menu-item/edit-menu-item.component';
import { DeleteMenuItemComponent } from './delete-menu-item/delete-menu-item.component';
import { SearchMenuItemComponent } from './search-menu-item/search-menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterComponent } from './filter/filter.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { CartComponent } from './cart/cart.component';
import { SearchUserFirstNamePipe } from './search-user-first-name-pipe';
import { SearchUserLastNamePipe } from './search-user-last-name-pipe';
import { SearchRestaurantNamePipe } from './search-restaurant-name-pipe';
import { SearchRestaurantCuisinePipe } from './search-restaurant-cuisine-pipe';
import { CompletenessPipe } from './completeness.pipe';
import { FilterRestaurantsPipe } from './restaurant-list.pipe';
import { AdminComponent } from './admin/admin.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    MainComponent,
    ShowUsersComponent,
    NewUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    SearchUserComponent,
    ShowRestaurantsComponent,
    NewRestaurantComponent,
    EditRestaurantComponent,
    DeleteRestaurantComponent,
    SearchRestaurantComponent,
    ShowOrdersComponent,
    NewOrderComponent,
    EditOrderComponent,
    DeleteOrderComponent,
    SearchOrderComponent,
    ShowOrderDetailsComponent,
    NewOrderDetailComponent,
    EditOrderDetailComponent,
    DeleteOrderDetailComponent,
    SearchOrderDetailComponent,
    ShowMenuItemsComponent,
    NewMenuItemComponent,
    EditMenuItemComponent,
    DeleteMenuItemComponent,
    SearchMenuItemComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    FilterComponent,
    RestaurantListComponent,
    CartComponent,
    SearchUserFirstNamePipe,
    SearchUserLastNamePipe,
    SearchRestaurantNamePipe,
    SearchRestaurantCuisinePipe,
    CompletenessPipe,
    FilterRestaurantsPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
