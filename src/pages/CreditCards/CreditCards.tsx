import React from "react"
import classNames from "classnames"
import { PageContainer } from '@/components'
import styles from "./CreditCards.module.scss"

export type CreditCardsProps = {
  className?: string
}

export const CreditCards: React.FC<CreditCardsProps> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      CreditCards
    </div>
  )
}

export default CreditCards