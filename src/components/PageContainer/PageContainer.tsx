import React from "react"
import classNames from "classnames"
import styles from "./PageContainer.module.scss"

export type PageContainerProps = {
  className?: string
  children: React.ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({ className, children }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.content}>
        <div className={styles.page}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageContainer