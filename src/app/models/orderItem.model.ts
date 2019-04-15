export class OrderItem {
  constructor (public orderItemKey: string,
               public menuItem: string,
               public quantity: number,
               public cost: number) {}
}
