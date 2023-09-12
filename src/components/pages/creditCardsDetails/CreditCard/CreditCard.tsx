import React from "react"
import classNames from "classnames"
import { Button } from 'primereact/button'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import mastercardLogo from "@/assets/logos/mastercard.svg"
import visaLogo from "@/assets/logos/visa.svg"
import hsbcLogo from "@/assets/logos/bank_hsbc.svg"
import chipImg from "@/assets/creditCard/chip.svg"
import contactlessImg from "@/assets/creditCard/contactless.svg"
import styles from "./CreditCard.module.scss"

export type CreditCardProps = {
  className?: string
}

export const CreditCard: React.FC<CreditCardProps> = ({ className }) => {

  const brandLogo = () => {
    return mastercardLogo
    // switch (brand) {
    //   case CreditCardBrand.Mastercard:
    //     return mastercardLogo
    //   case CreditCardBrand.Visa:
    //     return visaLogo
    // }
  }

  const handleDeleteClick = () => console.log("Eliminar tarjeta")

  const handleEditClick = () => console.log("Editar tarjeta")

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.row_top}>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            icon={() => <DeleteOutlineOutlinedIcon />}
            onClick={handleDeleteClick}
            severity="danger"
            rounded
            text
          />
          <Button
            className={styles.button}
            icon={() => <EditOutlinedIcon />}
            onClick={handleEditClick}
            severity="secondary"
            rounded
            text
          />
        </div>
        <img className={styles.bank_logo} src={hsbcLogo} alt="logo" />
      </div>
      <div className={styles.row_middle}>
        <img className={styles.chip} src={chipImg} alt="logo" />
        <img className={styles.bank_logo} src={contactlessImg} alt="logo" />
      </div>
      <div className={styles.row_bottom}>
        <div className={styles.card_data}>
          <span className={styles.numbers}>**** **** **** 1234</span>
          <span className={styles.name}>Lucas Ceratto</span>
        </div>
        <div className={styles.brand_logo}>
          <img className={styles.Logo} src={brandLogo()} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default CreditCard