import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import { Button } from 'primereact/button';
import {
  PageHeader,
  CreditCardSmall,
  CreditCardContainer,
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
        <CreditCardContainer>
          <Button
            className={styles.button}
            label="Añadir tarjeta"
          />
        </CreditCardContainer>
        {[1, 2, 3, 4].map((card) => (
          <div className={styles.rows}>
            <CreditCardContainer>
              <CreditCardSmall />
            </CreditCardContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreditCards