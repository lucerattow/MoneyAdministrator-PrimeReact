import React from "react"
import classNames from "classnames"
import { Button } from 'primereact/button'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Delete from "@mui/icons-material/Delete"
import styles from "./ResumeTreeButtons.module.scss"

export type ResumeTreeButtonsProps = {
  className?: string
}

export const ResumeTreeButtons: React.FC<ResumeTreeButtonsProps> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <Button
        className={styles.buttons}
        icon={<EditRoundedIcon />}
        severity='secondary'
        onClick={() => console.log("editar resumen")}
        rounded
        text
      />
      <Button
        className={styles.buttons}
        icon={<Delete />}
        severity='danger'
        onClick={() => console.log("eliminar resumen")}
        rounded
        text
      />
    </div>
  )
}

export default ResumeTreeButtons