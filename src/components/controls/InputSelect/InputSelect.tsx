import React from "react"
import classNames from "classnames"
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import styles from "./InputSelect.module.scss"

export type InputSelectProps<T extends FieldValues> = {
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

export const InputSelect: React.FC<InputSelectProps<any>> = ({
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
          <span className={classNames(styles.input)}>
            {leftIcon}
            <Dropdown
              {...field}
              className={classNames(
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

export default InputSelect