import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import {
  PageHeader,
  FormTransactions,
  TableTransactions
} from "@/components"
import styles from "./Transactions.module.scss"

export type TransactionsProps = {
  className?: string
}

export const Transactions: React.FC<TransactionsProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()
  const title = "Transacciones"

  React.useEffect(() => {
    setBreadcrumbs([
      { label: title },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      <PageHeader title={title} />
      <div className={styles.container}>
        <FormTransactions />
        <TableTransactions />
      </div>
    </div>
  )
}

export default Transactions