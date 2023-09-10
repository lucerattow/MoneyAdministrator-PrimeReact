import React from 'react'
import classNames from "classnames"
import { PageContainer, LeftPanelMenu } from '@/components'
import styles from "./ContentLoggedIn.module.scss"

export type ContentLoggedInProps = {
  className?: string
  children: React.ReactNode;
}

export const ContentLoggedIn: React.FC<ContentLoggedInProps> = ({ className, children }) => {
  return (
    <div className={classNames(className, styles.content)}>
      <LeftPanelMenu className={styles.leftPanel} />
      <PageContainer>
        {children}
      </PageContainer>
    </div>
  )
}

export default ContentLoggedIn