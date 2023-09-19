export interface ITransactions {
  id: string
  date: string
  entity: string
  description: string
  installment: string
  currency: string
  amount: number
  count: boolean
  payed: boolean
}

export const data: ITransactions[] = [
  {
    id: '1',
    date: '20/10/2023',
    entity: "BANCO FRANCES",
    description: 'Product Description',
    installment: "Servicio",
    currency: "ARS",
    amount: 99999999.00,
    count: true,
    payed: false,
  },
  {
    id: '2',
    date: '20/10/2023',
    entity: "BANCO FRANCES",
    description: 'Product Description',
    installment: "Servicio",
    currency: "ARS",
    amount: 99999999.00,
    count: true,
    payed: false,
  },
  {
    id: '3',
    date: '20/10/2023',
    entity: "BANCO FRANCES",
    description: 'Product Description',
    installment: "Servicio",
    currency: "ARS",
    amount: 99999999.00,
    count: true,
    payed: false,
  },
  {
    id: '4',
    date: '20/10/2023',
    entity: "BANCO FRANCES",
    description: 'Product Description',
    installment: "01/03",
    currency: "ARS",
    amount: 99999999.00,
    count: true,
    payed: true,
  },
  {
    id: '5',
    date: '20/10/2023',
    entity: "BANCO FRANCES",
    description: 'Product Description',
    installment: "01/03",
    currency: "ARS",
    amount: 99999999.00,
    count: true,
    payed: true,
  },
  {
    id: '6',
    date: '20/10/2023',
    entity: "BANCO FRANCES",
    description: 'Product Description',
    installment: "",
    currency: "ARS",
    amount: 99999999.00,
    count: true,
    payed: false,
  },
  {
    id: '7',
    date: '20/10/2023',
    entity: "BANCO FRANCES",
    description: 'Product Description',
    installment: "",
    currency: "ARS",
    amount: 99999999.00,
    count: true,
    payed: false,
  },
]