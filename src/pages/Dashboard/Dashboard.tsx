import React from "react"
import classNames from "classnames"
import styles from "./Dashboard.module.scss"

export type DashboardProps = {
  className?: string
}

export const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      Dashboard
    </div>
  )
}

export default Dashboard