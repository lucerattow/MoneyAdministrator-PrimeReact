import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { routeRegister } from "@/routes"
import { Divider } from "primereact/divider"
import { FormLogin } from "@/components"
import styles from "./Login.module.scss"

export type LoginProps = {
  className?: string
}

export const Login: React.FC<LoginProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <FormLogin />
      <p className={styles.text}>Olvidaste tu contraseña?</p>
      <Divider />
      <p>
        no tienes una cuenta?
        {" "}
        <Link
          className={styles.link}
          to={routeRegister}
        >
          registrate!
        </Link>
      </p>
    </div>
  )
}

export default Login