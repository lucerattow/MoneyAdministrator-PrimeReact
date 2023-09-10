import React from 'react'
import classNames from "classnames"
import { LeftPanelMenu } from "@/Layout"
import styles from "./ContentLoggedIn.module.scss"

export type ContentLoggedInProps = {
  className?: string
  children: React.ReactNode;
}

export const ContentLoggedIn: React.FC<ContentLoggedInProps> = ({ className, children }) => {
  return (
    <div className={classNames(className, styles.content)}>
      <LeftPanelMenu className={styles.leftPanel} />
      {children}
    </div>
  )
}

export default ContentLoggedIn