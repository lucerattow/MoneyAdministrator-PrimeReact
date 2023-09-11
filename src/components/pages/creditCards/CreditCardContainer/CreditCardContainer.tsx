import React from "react"
import classNames from "classnames"
import styles from "./CreditCardContainer.module.scss"

export type CreditCardContainerProps = {
  className?: string
  children: React.ReactNode
}

export const CreditCardContainer: React.FC<CreditCardContainerProps> = ({ className, children }) => {
  return (
    <div className={classNames(className, styles.container)}>
      {children}
    </div>
  )
}

export default CreditCardContainer