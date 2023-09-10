import React from 'react'
import { AuthBackground, LeftPanelAuth } from '@/components'
import styles from "./ContentLoggedOut.module.scss"

export type ContentLoggedOutProps = {
  className?: string
  children: React.ReactNode;
}

export const ContentLoggedOut: React.FC<ContentLoggedOutProps> = ({ className, children }) => {
  return (
    <div className={styles.content}>
      <LeftPanelAuth className={styles.leftPanel}>
        {children}
      </LeftPanelAuth>
      <AuthBackground />
    </div>
  )
}

export default ContentLoggedOut