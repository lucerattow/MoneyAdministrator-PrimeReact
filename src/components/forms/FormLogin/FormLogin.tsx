import React from "react"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppContext } from '@/hooks'
import { routeHome } from "@/routes"
import { InputText } from "@/components"
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
  const { control, handleSubmit, formState: { errors, touchedFields } } = useForm<LoginFormInput>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
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
        name="email"
        label="Correo Electrónico"
        isTouched={touchedFields["email"] || false}
        control={control}
        errors={errors}
        autoComplete="email"
        autoFocus
      />
    </form>
  )
}

export default FormLogin