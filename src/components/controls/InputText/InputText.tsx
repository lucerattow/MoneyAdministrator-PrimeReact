import React from "react"
import classNames from "classnames"
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
import { InputText as InpText } from 'primereact/inputtext'
import styles from "./InputText.module.scss"

export type InputTextProps<T extends FieldValues> = {
  className?: string
  name: keyof T
  label: string
  control: Control<T>
  errors: FieldErrors<T>
  defaultValue?: string
  autoFocus?: boolean
  autoComplete?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const InputText: React.FC<InputTextProps<any>> = ({
  className,
  name,
  label,
  control,
  errors,
  defaultValue = "",
  autoFocus = false,
  autoComplete = "",
  leftIcon,
  rightIcon,
}) => {
  const errorMessage = errors[name as string]?.message as string
  const _name = name as string

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
            rightIcon && "p-input-icon-right",
            leftIcon && "p-input-icon-left"
          )}>
            {leftIcon}
            <InpText
              {...field}
              className={classNames(
                "p-inputtext-sm",
                styles.input,
                isFormFieldInvalid() && "p-invalid"
              )}
              type="text"
              id={_name}
              name={_name}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
            />
            {rightIcon}
          </span>
          {FormErrorMessage()}
        </div>
      )}
    />
  )
}

export default InputText