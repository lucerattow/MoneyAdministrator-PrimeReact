import React from "react"
import classNames from "classnames"
import { ListItem, ListItemNode } from "@/components"
import styles from "./ListBox.module.scss"

export type ListBoxProps = {
  className?: string
  items: ListItemNode[]
  title?: string
  expanded?: boolean
}

export const ListBox: React.FC<ListBoxProps> = ({ className, items, title, expanded = false }) => {
  return (
    <div className={classNames(className, styles.container)}>
      {title &&
        <div className={styles.header}>
          <h3>Resúmenes registrados</h3>
        </div>
      }
      {items.map((item) => (
        <ListItem item={item} expanded={expanded} />
      ))}
    </div>
  )
}

export default ListBox