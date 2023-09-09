import React from 'react'
import classNames from "classnames"
import { useAppContext, useMenuAvatar } from '@/hooks';
import { Ripple } from 'primereact/ripple';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import styles from "./Header.module.scss"

export type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { setNotificationPanelShow } = useAppContext()
  const menuAvatar = React.useRef<Menu>(null)
  const menuAvatarItems = useMenuAvatar()

  const handleAvatarClick = (event: any) => { menuAvatar.current?.toggle(event) }

  const handleNotificationClick = () => setNotificationPanelShow(true)

  return (
    <header className={classNames(className, styles.header)}>
      <h2>Money Administrator</h2>
      <div className={styles.header_options}>
        <span className={styles.header_options_displayName}>Lucas Ceratto</span>
        <Avatar
          className={classNames("p-ripple", styles.header_options_item, styles.header_options_avatar)}
          //image="/images/avatar/amyelsner.png"
          icon="pi pi-user"
          shape="circle"
          onClick={handleAvatarClick}
        >
          <Ripple />
        </Avatar>
        <Button
          //Si hay notificaciones, cambiar el severity a primary y el icono
          className={classNames(styles.header_options_item)}
          severity="secondary"
          icon="pi pi-bell"
          rounded
          aria-label="Notification"
          onClick={handleNotificationClick}
        />
      </div>
      <Menu
        className={className}
        model={menuAvatarItems}
        ref={menuAvatar}
        popup
      />
    </header>
  )
}

export default Header