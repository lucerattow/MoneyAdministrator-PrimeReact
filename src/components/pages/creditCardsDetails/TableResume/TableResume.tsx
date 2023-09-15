import React from "react"
import classNames from "classnames"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data } from './TableResume.data';
import styles from "./TableResume.module.scss"

export type TableResumeProps = {
  className?: string
}

export const TableResume: React.FC<TableResumeProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.table)}>
      <DataTable value={data} size="small">
        <Column field="date" header="Fecha" />
        <Column field="description" header="Descripcion" />
        <Column field="installment" header="Cuotas" />
        <Column field="amountArs" header="ARS" />
        <Column field="amountUsd" header="USD" />
      </DataTable>
    </div>
  )
}

export default TableResume