import {CartProduct} from './cart-product';

export class Order {

    id: number;
    customer_name: string;
    customer_phone: string;
    date: string;
    products: CartProduct[];
}