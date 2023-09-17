import React from "react"
import classNames from "classnames"
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
import { InputText as InpText } from 'primereact/inputtext'
import { Button } from 'primereact/button';
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material'
import styles from "./InputPassword.module.scss"

export type InputPasswordProps<T extends FieldValues> = {
  className?: string
  name: keyof T
  label: string
  control: Control<T>
  errors: FieldErrors<T>
  defaultValue?: string
  autoFocus?: boolean
  autoComplete?: string
  leftIcon?: React.ReactNode
}

export const InputPassword: React.FC<InputPasswordProps<any>> = ({
  className,
  name,
  label,
  control,
  errors,
  defaultValue = "",
  autoFocus = false,
  autoComplete = "",
  leftIcon,
}) => {
  const [show, setShow] = React.useState<boolean>(false)
  const errorMessage = errors[name as string]?.message as string
  const _name = name as string

  const handleVisibilityClick = () => setShow(!show)

  const isFormFieldInvalid = () => !!errorMessage;

  const FormErrorMessage = () => isFormFieldInvalid() ? <small className="p-error">{errorMessage}</small> : <small className="p-error">&nbsp;</small>;

  return (
    <Controller
      name={_name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className={classNames(
          className,
          styles.container
        )}>
          <label htmlFor={_name}>{label}</label>
          <span className={classNames(
            styles.input,
            "p-inputgroup",
            leftIcon && "p-input-icon-left"
          )}>
            {leftIcon}
            <InpText
              className={classNames(
                "p-inputtext-sm",
                styles.input,
                isFormFieldInvalid() && "p-invalid"
              )}
              type={show ? 'text' : 'password'}
              id={_name}
              name={_name}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
            />
            <Button
              icon={() => show ? <VisibilityOff /> : <Visibility />}
              onClick={handleVisibilityClick}
              size="small"
            />
          </span>
          {FormErrorMessage()}
        </div>
      )}
    />
  )
}

export default InputPassword