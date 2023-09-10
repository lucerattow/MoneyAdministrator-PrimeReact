import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import { PageHeader } from "@/components"
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
        CreditCards
      </div>
    </div>
  )
}

export default CreditCards