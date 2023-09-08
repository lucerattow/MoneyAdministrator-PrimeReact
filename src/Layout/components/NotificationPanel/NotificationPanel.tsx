import React from 'react'
import classNames from 'classnames'
import { useAppContext } from '@/hooks';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import styles from "./NotificationPanel.module.scss"

export type NotificationPanelProps = {
  className?: string
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({ className }) => {
  const { notificationPanelShow, setNotificationPanelShow } = useAppContext()

  React.useEffect(() => {
    console.log(notificationPanelShow)
  }, [notificationPanelShow])

  const handleCloseClick = () => setNotificationPanelShow(false)

  return (
    <div className={classNames(
      className,
      styles.container,
      notificationPanelShow ? styles.show : ""
    )}>
      <div className={styles.header}>
        <h2>Notificaciones</h2>
        <Button
          className={styles.button}
          onClick={handleCloseClick}
          icon="pi pi-times"
          text
          rounded
          aria-label="Close"
        />
      </div>
    </div>
  )
}

export default NotificationPanel