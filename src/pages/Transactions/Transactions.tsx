import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import styles from "./Transactions.module.scss"

export type TransactionsProps = {
  className?: string
}

export const Transactions: React.FC<TransactionsProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbs([
      { label: "Transacciones" },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      Transactions
    </div>
  )
}

export default Transactions