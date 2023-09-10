import React from "react"
import classNames from "classnames"
import styles from "./CreditCardsDetails.module.scss"

export type CreditCardsDetailsProps = {
  className?: string
}

export const CreditCardsDetails: React.FC<CreditCardsDetailsProps> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      CreditCardsDetails
    </div>
  )
}

export default CreditCardsDetails