export interface CartsModel {
  readonly ide: number;
  readonly userId: number;
  readonly date: string;
  readonly products: [{
    productsId: number;
    quantity: number;
  }

  ]
}

