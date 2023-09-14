import React from "react"
import classNames from "classnames"
import { Button } from "primereact/button"
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import styles from "./ListItem.module.scss"

export type ListItemNode = {
  icon?: React.ReactNode
  label: string
  rightContent?: React.ReactNode
  childrens?: ListItemNode[]
}

export type ListItemProps = {
  className?: string
  item: ListItemNode
  indent?: number
}

export const ListItem: React.FC<ListItemProps> = ({ className, item, indent = 0 }) => {
  const [expanded, setExpanded] = React.useState<boolean>(true)

  const getArrowIcon = () => {
    if (expanded) {
      return <KeyboardArrowDownRoundedIcon />
    }

    return <KeyboardArrowRightRoundedIcon />
  }

  const handleExpandClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setExpanded(!expanded)
  }

  return (
    <>
      <div
        className={classNames(className, styles.item)}
        style={{ paddingLeft: `calc(${styles.var_padding_right} + calc(12px * ${indent}))` }}
        onClick={handleExpandClick}
      >
        <div className={styles.left}>
          {item.icon &&
            <div className={styles.icon}>
              {item.icon}
            </div>
          }
          <span>
            {item.label}
          </span>
        </div>
        {item.rightContent
          ? (
            <div className={styles.actions}>
              {item.rightContent}
            </div>
          ) : item.childrens && (
            <div>
              {getArrowIcon()}
            </div>
          )
        }
      </div>
      {item.childrens && (
        <div className={classNames(styles.children, expanded ? styles.expanded : styles.collapsed)} style={{ height: item.childrens.length * 44 }}>
          {item.childrens.map((item) => (
            <ListItem item={item} indent={indent + 1} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListItem