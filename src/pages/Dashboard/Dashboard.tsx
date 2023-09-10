import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import styles from "./Dashboard.module.scss"

export type DashboardProps = {
  className?: string
}

export const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbs([
      { label: "Dashboard" },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      Dashboard
    </div>
  )
}

export default Dashboard