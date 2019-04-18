import { MenuItem } from './menuItem.model';

export class Restaurant {
  constructor (public restaurantName: string,
               public streetAddress: string,
               public hours: string,
               public website: string,
               public cuisine: string,
               public price: string,
               public imageUrl: string,
               public menuItems: MenuItem []) {}
}
