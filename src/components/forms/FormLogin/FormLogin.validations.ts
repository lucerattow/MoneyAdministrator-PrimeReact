import * as yup from 'yup'

// Definicion de tipos para los datos del formulario
export type LoginFormInput = {
  email: string
  password: string
}

// Esquema de validación con yup
export const validationSchema = yup.object<LoginFormInput>().shape({
  email: yup
    .string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(/[a-z]/, 'La contraseña debe contener al menos un carácter en minúscula')
    .required('La contraseña es requerida'),
});
