import React from "react"
import classNames from "classnames"
import { ListItem, ListItemNode } from "@/components"
import styles from "./ListBox.module.scss"

export type ListBoxProps = {
  className?: string
  items: ListItemNode[]
  title?: string
}

export const ListBox: React.FC<ListBoxProps> = ({ className, items, title }) => {
  return (
    <div className={classNames(className, styles.container)}>
      {title &&
        <div className={styles.header}>
          <h3>Resúmenes registrados</h3>
        </div>
      }
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  )
}

export default ListBox