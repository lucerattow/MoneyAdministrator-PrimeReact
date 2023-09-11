import React from "react"
import classNames from "classnames"
import styles from "./CreditCardDetails.module.scss"

export type CreditCardDetailsProps = {
  className?: string
}

export const CreditCardDetails: React.FC<CreditCardDetailsProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      {/* Fechas */}
      <div className={styles.data_row}>
        {/* Fecha cierre, Vencimiento */}
        <div className={styles.data_column}>
          <div className={classNames(styles.data, styles.margin_right)}>
            <span className={styles.title}>Fecha de cierre</span>
            <span>28/11/2023</span>
          </div>
          <div className={classNames(styles.data, styles.margin_right)}>
            <span className={styles.title}>Vencimiento</span>
            <span>28/11/2023</span>
          </div>
        </div>
        {/* Prox Cierre, Prox Vto */}
        <div className={styles.data_column}>
          <div className={classNames(styles.data, styles.margin_right)}>
            <span className={styles.title}>Proximo cierre</span>
            <span>28/11/2023</span>
          </div>
          <div className={classNames(styles.data, styles.margin_right)}>
            <span className={styles.title}>Proximo Vto</span>
            <span>28/11/2023</span>
          </div>
        </div>
      </div>
      {/* Totales, Minimo, Restante */}
      <div className={styles.data_row}>
        {/* Total Ars, Saldo pendiente */}
        <div className={styles.data_column}>
          <div className={classNames(styles.data, styles.margin_left)}>
            <span className={styles.title}>Total ARS</span>
            <div className={styles.value}>
              <span>$</span>
              <span>00.000.000,00</span>
            </div>
          </div>
          <div className={classNames(styles.data, styles.margin_left)}>
            <span className={styles.title}>Saldo pendiente</span>
            <div className={styles.value}>
              <span>$</span>
              <span>00.000.000,00</span>
            </div>
          </div>
        </div>
        {/* Total Usd, pago minimo */}
        <div className={styles.data_column}>
          <div className={classNames(styles.data, styles.margin_left)}>
            <span className={styles.title}>Total USD</span>
            <div className={styles.value}>
              <span>$</span>
              <span>00.000.000,00</span>
            </div>
          </div>
          <div className={classNames(styles.data, styles.margin_left)}>
            <span className={styles.title}>Pago minimo</span>
            <div className={styles.value}>
              <span>$</span>
              <span>00.000.000,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCardDetails