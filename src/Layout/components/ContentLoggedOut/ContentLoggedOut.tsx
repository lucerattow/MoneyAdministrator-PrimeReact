import React from 'react'
import styles from "./ContentLoggedOut.module.scss"

export type ContentLoggedOutProps = {
  className?: string
  children: React.ReactNode;
}

export const ContentLoggedOut: React.FC<ContentLoggedOutProps> = ({ className, children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

export default ContentLoggedOut