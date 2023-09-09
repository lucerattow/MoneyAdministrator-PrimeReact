import React from 'react'
import classNames from 'classnames'
import { useAppContext } from '@/hooks';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import styles from "./NotificationPanel.module.scss"

export type NotificationPanelProps = {
  className?: string
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({ className }) => {
  const { notificationPanelShow, setNotificationPanelShow } = useAppContext()
  const msgs = React.useRef<Messages>(null);

  const handleCloseClick = () => setNotificationPanelShow(false)

  React.useEffect(() => {
    msgs.current?.show([
      { severity: 'success', detail: 'Se realizaron todos los pagos del mes', sticky: true },
      { severity: 'info', detail: 'Message Content', sticky: true },
      { severity: 'warn', detail: 'Su contraseña esta por vencer', sticky: true },
      { severity: 'error', detail: 'Message Content', sticky: true }
    ]);
  }, [])

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
      <div className={styles.messages}>
        <Messages ref={msgs} />
      </div>
    </div>
  )
}

export default NotificationPanel