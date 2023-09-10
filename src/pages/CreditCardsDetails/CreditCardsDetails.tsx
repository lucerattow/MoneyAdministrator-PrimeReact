import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import styles from "./CreditCardsDetails.module.scss"

export type CreditCardsDetailsProps = {
  className?: string
}

export const CreditCardsDetails: React.FC<CreditCardsDetailsProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbs([
      { label: "Tarjetas de crédito", disabled: true },
      { label: "Detalles de tarjeta" },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      CreditCardsDetails
    </div>
  )
}

export default CreditCardsDetails