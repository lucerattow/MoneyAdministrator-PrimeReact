import React from "react"
import classNames from "classnames"
import { ListBox } from "@/components"
import { items } from "./ResumeTreeList.nodes"
import styles from "./ResumeTreeList.module.scss"

export type ResumeTreeListProps = {
  className?: string
}

export const ResumeTreeList: React.FC<ResumeTreeListProps> = ({ className }) => {

  return (
    <ListBox className={classNames(className)} title="Resúmenes registrados" items={items} />
  )
}

export default ResumeTreeList