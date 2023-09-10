import React from "react"
import classNames from "classnames"
import styles from "./Transactions.module.scss"

export type TransactionsProps = {
  className?: string
}

export const Transactions: React.FC<TransactionsProps> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      Transactions
    </div>
  )
}

export default Transactions