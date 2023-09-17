import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { routeHome } from "@/routes"
import { Divider } from "primereact/divider"
import { FormRegister } from "@/components"
import styles from "./Register.module.scss"

export type RegisterProps = {
  className?: string
}

export const Register: React.FC<RegisterProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <FormRegister />
      <Divider />
      <p>
        Ya tienes una cuenta?
        {" "}
        <Link
          className={styles.link}
          to={routeHome}
        >
          inicia sesion!
        </Link>
      </p>
    </div>
  )
}

export default Register