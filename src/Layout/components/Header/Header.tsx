import React from 'react'
import classNames from "classnames"
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import styles from "./Header.module.scss"

export type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={classNames(className, styles.header)}>
      <h2>Money Administrator</h2>
      <div className={styles.header_options}>
        <span className={styles.header_options_displayName}>Lucas Ceratto</span>
        <Avatar
          className={classNames("mr-2", styles.header_options_item, styles.header_options_avatar)}
          //image="/images/avatar/amyelsner.png"
          icon="pi pi-user"
          shape="circle"
        />
        <Button
          //Si hay notificaciones, cambiar el severity a primary y el icono
          className={classNames(styles.header_options_item)}
          severity="secondary"
          icon="pi pi-bell"
          rounded
          aria-label="Notification"
        />
      </div>
    </header>
  )
}

export default Header