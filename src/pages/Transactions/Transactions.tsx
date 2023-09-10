import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import { PageHeader } from "@/components"
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
      Transactions
    </div>
  )
}

export default Transactions