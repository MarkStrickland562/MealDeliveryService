import { MenuItem } from './menuItem.model';

export class Restaurant {
  constructor (public restaurantKey: string,
               public restaurantName: string,
               public streetAddress: string,
               public hours: string,
               public website: string,
               public cuisine: string,
               public menuItems: MenuItem []) {}
}
