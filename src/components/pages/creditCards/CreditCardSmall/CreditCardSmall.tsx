import React from "react"
import classNames from "classnames"
import { useNavigate } from 'react-router-dom';
import { routeCreditCardDetails } from "@/routes"
import { Button } from 'primereact/button'
import mastercardLogo from "@/assets/logos/mastercard.svg"
import visaLogo from "@/assets/logos/visa.svg"
import hsbcLogo from "@/assets/logos/bank_hsbc.svg"
import styles from "./CreditCardSmall.module.scss"

export type CreditCardSmallProps = {
  className?: string
}

export const CreditCardSmall: React.FC<CreditCardSmallProps> = ({ className }) => {
  const navigate = useNavigate()
  const creditCardId = "1"

  const brandLogo = () => {
    return mastercardLogo
    // switch (brand) {
    //   case CreditCardBrand.Mastercard:
    //     return mastercardLogo
    //   case CreditCardBrand.Visa:
    //     return visaLogo
    // }
  }

  const handleClick = () => navigate(routeCreditCardDetails(creditCardId))

  return (
    <Button
      className={classNames(className, styles.credit_card)}
      severity='secondary'
      onClick={handleClick}
    >
      <div className={styles.container}>
        <div className={styles.brands}>
          <img className={styles.image} src={brandLogo()} alt="logo" />
          <img className={styles.image} src={hsbcLogo} alt="logo" />
        </div>
        <div className={styles.data}>
          <span className={styles.numbers}>**** **** **** 1234</span>
        </div>
      </div>
    </Button>
  )
}

export default CreditCardSmall