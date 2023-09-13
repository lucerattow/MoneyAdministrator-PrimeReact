import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import { Button } from 'primereact/button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
  PageHeader,
  CreditCard,
  CreditCardDetails,
} from "@/components"
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

  const handleImportClick = () => console.log("Importar PDF")

  const handleCreateClick = () => console.log("Crear resumen")

  return (
    <div className={classNames(className)}>
      <PageHeader title={title} buttonBack />
      <div className={styles.container}>
        <div className={styles.column_left}>
          <CreditCard />
          <span className={classNames("p-buttonset", styles.buttons)}>
            <Button
              className={styles.button}
              icon={() => <UploadFileIcon />}
              label="Importar"
              onClick={handleImportClick}
            />
            <Button
              className={styles.button}
              icon={() => <AddCircleOutlineOutlinedIcon />}
              label="Crear"
              onClick={handleCreateClick}
            />
          </span>
        </div>
        <div className={styles.column_right}>
          <CreditCardDetails />
          <div>hola</div>
        </div>
      </div>
    </div>
  )
}

export default CreditCardsDetails