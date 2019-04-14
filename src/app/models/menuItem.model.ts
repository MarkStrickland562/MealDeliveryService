export class MenuItem {
  constructor (public menuItemKey: string,
               public menuItemName: string,
               public menuItemCost: string,
               public preparationTime: string,
               public menuSubItems: string []) {}
}
