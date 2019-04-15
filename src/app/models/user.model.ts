export class User {
  constructor (public userKey: string,
               public firstName:string,
               public lastName: string,
               public emailAddress: string,
               public deliveryAddress: string,
               public phoneNumber: string) {}
}
