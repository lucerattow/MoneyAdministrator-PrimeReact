import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import { PageHeader, CreditCard } from "@/components"
import styles from "./CreditCardsDetails.module.scss"

export type CreditCardsDetailsProps = {
  className?: string
}

export const CreditCardsDetails: React.FC<CreditCardsDetailsProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()
  const title = "Detalles de tarjeta"

  React.useEffect(() => {
    setBreadcrumbs([
      { label: "Tarjetas de crédito", disabled: true },
      { label: title },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      <PageHeader title={title} buttonBack />
      <div className={styles.container}>
        <div className={styles.column_left}>
          <CreditCard />
        </div>
        <div className={styles.column_right}>

        </div>
      </div>
    </div>
  )
}

export default CreditCardsDetails