import { MenuItem } from './menuItem.model';

export class Restaurant {
  constructor (public restaurantKey: string,
               public restaurantName: string,
               public streetAddress: string,
               public hours: string,
               public website: string,
               public menuType: string,
               public menuItems: MenuItem [],
               public eventDate: Date = new Date()) {}
}
