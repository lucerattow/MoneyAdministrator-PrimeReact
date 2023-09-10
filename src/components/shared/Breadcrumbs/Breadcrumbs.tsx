import React from "react"
import classNames from "classnames"
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/hooks';
import { routeHome } from '@/routes';
import { BreadCrumb } from 'primereact/breadcrumb';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import styles from "./Breadcrumbs.module.scss"

export type BreadcrumbsProps = {
  className?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  const navigate = useNavigate()
  const { breadcrumbs } = useAppContext()

  const home = {
    icon: () => <HomeOutlinedIcon sx={{ color: "white" }} />,
    command: () => navigate(routeHome),
  }

  const items = [
    { label: 'Computer' },
    { label: 'Notebook' },
    { label: 'Accessories' },
    { label: 'Backpacks' },
    { label: 'Item' }
  ];

  return (
    <div className={classNames(className)}>
      <BreadCrumb className={styles.breadcrumb} home={home} model={breadcrumbs} />
    </div>
  )
}

export default Breadcrumbs