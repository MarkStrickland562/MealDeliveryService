import { OrderItem } from './orderItem.model';

export class Order {
  constructor (public orderUserKey: string,
               public orderDateTime: Date = new Date(),
               public deliveryDateTime: Date = new Date(),
               public restaurantKey: string,
               public orderItems: OrderItem[],
               public totalCost: number,
               public status: string) {}

  addNewOrderItem(newItem: OrderItem){
    let added = false;
    if(this.orderItems.length > 0){
      for(let i = 0; i< this.orderItems.length; i++){
        if(this.orderItems[i].menuItem == newItem.menuItem){
          this.orderItems[i].quantity++;
          added = true;
          break;
        }
      }
    }
    if (added == false)
    {
      this.orderItems.push(newItem);
    }
    console.log(this.totalCost);
    this.totalCost += newItem.cost;
  }
}
