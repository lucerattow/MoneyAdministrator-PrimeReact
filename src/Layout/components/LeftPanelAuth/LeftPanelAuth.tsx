import React from "react"
import classNames from "classnames"
import styles from "./LeftPanelAuth.module.scss"

export type LeftPanelAuthProps = {
  className?: string
  children: React.ReactNode
}

export const LeftPanelAuth: React.FC<LeftPanelAuthProps> = ({ className, children }) => {
  return (
    <div className={classNames(className, styles.container)}>
      {children}
    </div>
  )
}

export default LeftPanelAuth