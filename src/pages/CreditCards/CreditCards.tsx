import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import { Button } from 'primereact/button';
import {
  PageHeader,
  CreditCardSmall,
  CreditCardRow,
} from "@/components"
import styles from "./CreditCards.module.scss"

export type CreditCardsProps = {
  className?: string
}

export const CreditCards: React.FC<CreditCardsProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()
  const title = "Tarjetas de crédito"

  React.useEffect(() => {
    setBreadcrumbs([
      { label: title },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      <PageHeader title={title} />
      <div className={styles.container}>
        <div className={styles.tooltips}>
          <Button
            className={styles.button}
            label="Añadir tarjeta"
          />
        </div>
        {[1, 2, 3, 4].map((card) => (
          <CreditCardRow className={styles.rows} />
        ))}
      </div>
    </div>
  )
}

export default CreditCards