// dataOrders.ts

export interface Order {
    id: number;
    number: string; 
    status: string; 
    statusClassname: string,
    delivery?: string; 
    details: string;
}
  
export const ordersData: Order[] = [
    {
        id: 1,
        number: '№111133333333',
        status: 'Собирается на складе',
        statusClassname: 'account-page-order-assemble',
        delivery: 'Доставка ожидается 3 декабря',
        details: 'Детали',
    },
    {
        id: 2,
        number: '№111133333333',
        status: 'Доставлен',
        statusClassname: 'account-page-order-arrived',
        delivery: 'Доставлен на склад 3 декабря',
        details: 'Детали',
    },
    {
        id: 3,
        number: '№111133333333',
        status: 'Отменен',
        statusClassname: 'account-page-order-canceled',
        details: 'Детали',
    },
];
  