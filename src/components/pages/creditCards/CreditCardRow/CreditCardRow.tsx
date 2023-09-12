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
      <div className={styles.column_left}>
        <CreditCardSmall />
      </div>
      <div className={styles.column_right}>
        <CreditCardDetails className={styles.card_details} />
      </div>
    </div>
  )
}

export default CreditCardRow