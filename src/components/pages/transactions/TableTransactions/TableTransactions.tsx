import React from "react"
import classNames from "classnames"
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { data as transactions, ITransactions } from './TableTransactions.data';
import styles from "./TableTransactions.module.scss"

export type TableTransactionsProps = {
  className?: string
}

export const TableTransactions: React.FC<TableTransactionsProps> = ({ className }) => {
  const [data, setData] = React.useState<ITransactions[]>(transactions)

  const formatCurrency = (value: number) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const amountBodyTemplate = (rowData: ITransactions) => `${formatCurrency(rowData.amount)}`

  const countBodyTemplate = (rowData: ITransactions) =>
    <Checkbox
      checked={rowData.count}
      onChange={(e) => onCheckboxChange(e, rowData, "count")}
    />

  const payedBodyTemplate = (rowData: ITransactions) =>
    <Checkbox
      checked={rowData.payed}
      onChange={(e) => onCheckboxChange(e, rowData, "payed")}
    />

  const onCheckboxChange = (e: CheckboxChangeEvent, rowData: ITransactions, value: string) => {
    const newData = data.map((item) =>
      item.id === rowData.id ? { ...item, [value]: e.checked } : item
    )
    setData(newData)
  };

  const totalAmount = () => {
    let total = 0;

    for (let trxs of data) {
      if (trxs.count) {
        total += trxs.amount;
      }
    }

    return formatCurrency(total);
  };

  const totalRemaining = () => {
    let total = 0;

    for (let trxs of data) {
      if (trxs.count && !trxs.payed) {
        total += trxs.amount;
      }
    }

    return formatCurrency(total);
  };

  const FooterGroup = (
    <ColumnGroup>
      <Row>
        <Column footer="Total a pagar:" colSpan={5} footerStyle={{ textAlign: 'right' }} />
        <Column footer={totalAmount} colSpan={3} />
      </Row>
      <Row>
        <Column footer="Resta pagar:" colSpan={5} footerStyle={{ textAlign: 'right' }} />
        <Column footer={totalRemaining} colSpan={3} />
      </Row>
    </ColumnGroup>
  )

  return (
    <div className={classNames(className, styles.table)}>
      <DataTable value={data} size="small" footerColumnGroup={FooterGroup}>
        <Column field="date" header="Fecha" />
        <Column field="entity" header="Entidad" />
        <Column field="description" header="Descripcion" />
        <Column field="installment" align="center" />
        <Column field="currency" header="Moneda" align="center" />
        <Column field="amount" header="Monto" align="right" body={amountBodyTemplate} />
        <Column field="count" header="Sumar" align="center" body={countBodyTemplate} />
        <Column field="payed" header="Pagado" align="center" body={payedBodyTemplate} />
      </DataTable>
    </div>
  )
}

export default TableTransactions