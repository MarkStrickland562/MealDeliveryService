import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: ShowUsersComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent
  },
  {
    path: 'delete-user/:id',
    component: DeleteUserComponent
  },
  {
    path: 'search-user',
    component: SearchUserComponent
  },
  {
    path: 'restaurants/:restaurantKey',
    component: ShowMenuItemsComponent
  },
  {
    path: 'new-restaurant',
    component: NewRestaurantComponent
  },
  {
    path: 'edit-restaurant/:id',
    component: EditRestaurantComponent
  },
  {
    path: 'delete-restaurant/:id',
    component: DeleteRestaurantComponent
  },
  {
    path: 'search-restaurant',
    component: SearchRestaurantComponent
  },
  {
    path: 'orders',
    component: ShowOrdersComponent
  },
  {
    path: 'new-order',
    component: NewOrderComponent
  },
  {
    path: 'edit-order/:id',
    component: EditOrderComponent
  },
  {
    path: 'delete-order/:id',
    component: DeleteOrderComponent
  },
  {
    path: 'search-order',
    component: SearchOrderComponent
  },
  {
    path: 'restaurants',
    component: ShowRestaurantsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
