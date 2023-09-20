import React from "react"
import classNames from "classnames"
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import styles from "./InputSelect.module.scss"

export type InputSelectProps<T extends FieldValues> = {
  className?: string
  inputClassName?: string
  name: keyof T
  label: string
  control: Control<T>
  errors: FieldErrors<T>
  options?: any[]
  optionLabel: string
  defaultValue?: string
  autoFocus?: boolean
  autoComplete?: string
}

export const InputSelect: React.FC<InputSelectProps<any>> = ({
  className,
  inputClassName,
  name,
  label,
  control,
  errors,
  options,
  optionLabel,
  defaultValue = "",
  autoFocus = false,
  autoComplete = "",
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
        <div className={classNames(className, styles.container)}>
          <label htmlFor={_name}>{label}</label>
          <span className={classNames(styles.input)}>
            <Dropdown
              {...field}
              className={classNames(
                inputClassName,
                styles.input,
                isFormFieldInvalid() && "p-invalid"
              )}
              type="text"
              id={_name}
              name={_name}
              options={options}
              optionLabel={optionLabel}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              onChange={(e) => field.onChange(e.value)}
            />
          </span>
          {FormErrorMessage()}
        </div>
      )}
    />
  )
}

export default InputSelect