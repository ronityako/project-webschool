import {OrderProduct} from './order-product';

export class Order {
    customer_name: string;
    customer_phone: string;
    date: string;
    paymentMethod: String;
    products: OrderProduct[];
    subTotal: number;
}