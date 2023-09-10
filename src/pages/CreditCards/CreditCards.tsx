import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import styles from "./CreditCards.module.scss"

export type CreditCardsProps = {
  className?: string
}

export const CreditCards: React.FC<CreditCardsProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbs([
      { label: "Tarjetas de crédito" },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      CreditCards
    </div>
  )
}

export default CreditCards