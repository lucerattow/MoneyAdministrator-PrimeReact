import React from "react"
import classNames from "classnames"
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import styles from "./InputCalendar.module.scss"

export type InputCalendarProps<T extends FieldValues> = {
  className?: string
  name: keyof T
  label: string
  control: Control<T>
  errors: FieldErrors<T>
  defaultValue?: string
  autoFocus?: boolean
  autoComplete?: string
  dateFormat?: string
  showButtonBar?: boolean
  icon?: React.ReactNode
}

export const InputCalendar: React.FC<InputCalendarProps<any>> = ({
  className,
  name,
  label,
  control,
  errors,
  defaultValue = "",
  autoFocus = false,
  autoComplete = "",
  dateFormat = "dd/mm/yy",
  showButtonBar = false,
  icon,
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
        <div className={styles.container}>
          <label htmlFor={_name}>{label}</label>
          <div className={classNames(
            styles.input,
            icon && "p-inputgroup"
          )}>
            <Calendar
              {...field}
              className={classNames(
                className,
                styles.input,
                isFormFieldInvalid() && "p-invalid"
              )}
              inputId={_name}
              name={_name}
              dateFormat="dd/mm/yy"
              autoFocus={autoFocus}
              showButtonBar={showButtonBar}
            />
            {icon && (
              <span className="p-inputgroup-addon">
                {icon}
              </span>
            )}
          </div>
          {FormErrorMessage()}
        </div>
      )}
    />
  )
}

export default InputCalendar