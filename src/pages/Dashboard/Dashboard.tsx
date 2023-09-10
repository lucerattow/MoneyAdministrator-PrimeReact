import React from "react"
import classNames from "classnames"
import { useAppContext } from '@/hooks';
import { PageHeader } from "@/components"
import styles from "./Dashboard.module.scss"

export type DashboardProps = {
  className?: string
}

export const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const { setBreadcrumbs } = useAppContext()
  const title = "Dashboard"

  React.useEffect(() => {
    setBreadcrumbs([
      { label: title },
    ]);
  }, [])

  return (
    <div className={classNames(className)}>
      <PageHeader title={title} />
      <div className={styles.container}>
        Dashboard
      </div>
    </div>
  )
}

export default Dashboard