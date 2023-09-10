import React from 'react'
import classNames from "classnames"
import { useMenuLeftPanel } from '@/hooks';
import { Menu } from 'primereact/menu';
import "./LeftPanelMenu.scss"

export type LeftPanelMenuProps = {
  className?: string
}

export const LeftPanelMenu: React.FC<LeftPanelMenuProps> = ({ className }) => {
  const items = useMenuLeftPanel()

  return (
    <div className={classNames(className, "container")}>
      <Menu className={"menu"} model={items} />
    </div>
  )
}

export default LeftPanelMenu