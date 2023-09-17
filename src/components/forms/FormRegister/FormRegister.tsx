import React from "react"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppContext } from '@/hooks'
import { routeHome } from "@/routes"
import { Button } from 'primereact/button'
import {
  InputText,
  InputPassword
} from "@/components"
import { FormRegisterInput, validationSchema } from "./FormRegister.validations"
import styles from "./FormRegister.module.scss"

export type FormRegisterProps = {
  className?: string
}

export const FormRegister: React.FC<FormRegisterProps> = ({ className }) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()
  const { setUser } = useAppContext()
  const { control, handleSubmit, formState: { errors } } = useForm<FormRegisterInput>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur"
  })

  const onSubmit: SubmitHandler<FormRegisterInput> = async (data) => {
    setLoading(true)
    setTimeout(() => {
      setUser(true)
      navigate(routeHome)
    }, 5000)
    //TODO: cambiar este setTimeout por la funcion de register real
  }

  return (
    <form className={classNames(className, styles.container)} onSubmit={handleSubmit(onSubmit)}>
      <InputText
        className={styles.input}
        name="displayName"
        label="Nombre de usuario"
        control={control}
        errors={errors}
        autoComplete="displayName"
        autoFocus
      />
      <InputText
        className={styles.input}
        name="email"
        label="Correo Electrónico"
        control={control}
        errors={errors}
        autoComplete="email"
      />
      <InputPassword
        className={styles.input}
        name="password"
        label="Contraseña"
        control={control}
        errors={errors}
        autoComplete="password"
      />
      <InputPassword
        className={styles.input}
        name="confirmPassword"
        label="Confirmar Contraseña"
        control={control}
        errors={errors}
        autoComplete="confirmPassword"
      />
      <Button
        className={styles.button}
        type="submit"
        loading={loading}
        label="Registrarse"
      />
    </form>
  )
}

export default FormRegister