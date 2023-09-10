import React from 'react'
import classNames from 'classnames';
import { Header, NotificationPanel, ContentLoggedIn, ContentLoggedOut } from "@/Layout"
import styles from "./Layout.module.scss"

export type LayoutProps = {
  className?: string
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  const user = true

  return (
    <div className={classNames(className, styles.layout)}>
      <Header />
      {user
        ? (
          <ContentLoggedIn>
            {children}
          </ContentLoggedIn>
        ) : (
          <ContentLoggedOut>
            {children}
          </ContentLoggedOut>
        )
      }
      <NotificationPanel />
    </div>
  )
}

export default Layout