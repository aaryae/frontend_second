import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface inputtype {
  type: string
  placeholder: string
  id: string
  autocomplete?: 'on' | 'off'
  register: UseFormRegister<FieldValues>
}
