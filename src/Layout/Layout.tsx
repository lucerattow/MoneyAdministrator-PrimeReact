import React from 'react'
import classNames from 'classnames';
import { Header, NotificationPanel } from "@/Layout"
import styles from "./Layout.module.scss"

export type LayoutProps = {
  className?: string
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <div className={classNames(className, styles.layout)}>
      <Header />
      <div className={styles.layout_content}>
        {children}
      </div>
      <NotificationPanel />
    </div>
  )
}

export default Layout