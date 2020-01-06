import { Payment } from './payment';

export class Student {
    id: number;
    fullName: string;
    phone: string;
    mobile: string;
    school: string;
    class: string;
    group: number;
    startDate: string;
    payments: Payment[];
}