import React from "react"
import classNames from "classnames"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data } from './TablePayments.Data';
import styles from "./TablePayments.module.scss"

export type TablePaymentsProps = {
  className?: string
}

export const TablePayments: React.FC<TablePaymentsProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.table)}>
      <DataTable value={data} size="small">
        <Column field="date" header="Fecha" />
        <Column field="entity" header="Entidad" />
        <Column field="description" header="Descripcion" />
        <Column field="amount" header="Monto" />
      </DataTable>
    </div>
  )
}

export default TablePayments