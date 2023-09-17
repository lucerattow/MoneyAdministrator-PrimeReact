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
import { LoginFormInput, validationSchema } from "./FormLogin.validations"
import styles from "./FormLogin.module.scss"
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

export type FormLoginProps = {
  className?: string
}

export const FormLogin: React.FC<FormLoginProps> = ({ className }) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()
  const { setUser } = useAppContext()
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInput>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur"
  })

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    console.log("submit")
    setLoading(true)
    setTimeout(() => {
      setUser(true)
      navigate(routeHome)
    }, 5000)
    setLoading(false)
  }

  return (
    <form className={classNames(className, styles.container)} onSubmit={handleSubmit(onSubmit)}>
      <InputText
        className={styles.input}
        name="email"
        label="Correo Electrónico"
        control={control}
        errors={errors}
        autoComplete="email"
        autoFocus
      />
      <InputPassword
        className={styles.input}
        name="password"
        label="Contraseña"
        control={control}
        errors={errors}
        autoComplete="password"
      />
      <Button
        type="submit"
        className={styles.button}
        loading={loading}
        label="Iniciar sesión"
      />
    </form>
  )
}

export default FormLogin