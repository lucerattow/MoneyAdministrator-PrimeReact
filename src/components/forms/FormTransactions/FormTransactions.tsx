import React from "react"
import classNames from "classnames"
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputCalendar } from "@/components"
import { FormTransactionsInput, validationSchema } from "./FormTransactions.validations"
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import styles from "./FormTransactions.module.scss"

export type FormTransactionsProps = {
  className?: string
}

export const FormTransactions: React.FC<FormTransactionsProps> = ({ className }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormTransactionsInput>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur"
  })

  return (
    <form className={classNames(className, styles.container)}>
      <InputCalendar
        className={styles.date}
        name="date"
        label="Fecha"
        control={control}
        errors={errors}
        autoComplete="date"
        autoFocus
        showButtonBar
        icon={<CalendarMonthRoundedIcon />}
      />
    </form>
  )
}

export default FormTransactions