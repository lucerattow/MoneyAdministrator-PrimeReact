import React from "react"
import classNames from "classnames"
import {
  CreditCardSmall,
  CreditCardDetails
} from "@/components"
import styles from "./CreditCardRow.module.scss"

export type CreditCardRowProps = {
  className?: string
}

export const CreditCardRow: React.FC<CreditCardRowProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.card}>
        <CreditCardSmall />
      </div>
      <div className={styles.details}>
        <CreditCardDetails />
      </div>
    </div>
  )
}

export default CreditCardRow