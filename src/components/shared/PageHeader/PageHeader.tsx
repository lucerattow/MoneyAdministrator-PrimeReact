import React from "react"
import classNames from "classnames"
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import styles from "./PageHeader.module.scss"

export type PageHeaderProps = {
  className?: string
  title: string
  subtitle?: string
  buttonBack?: boolean
}

export const PageHeader: React.FC<PageHeaderProps> = ({ className, title, subtitle, buttonBack = false }) => {
  const navigate = useNavigate()

  const handleBackClick = () => navigate(-1)

  return (
    <div className={classNames(className, styles.header)}>
      <div className={styles.left}>
        {buttonBack && <Button
          className={styles.button}
          onClick={handleBackClick}
          icon={() => <ArrowBackIosNewRoundedIcon />}
          text
          rounded
          aria-label="Close"
          severity='secondary'
        />}
        <h2>{title}</h2>
      </div>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  )
}

export default PageHeader