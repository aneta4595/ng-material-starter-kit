export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: [{
    productsId: number;
    quantity: number;
  }

]
  }

