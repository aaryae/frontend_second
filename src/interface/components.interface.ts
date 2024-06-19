import { FieldValues, UseFormRegister } from 'react-hook-form'

export default interface inputtype {
  type: string
  placeholder: string
  id: string
  autocomplete?:'on' | 'off'
  register: UseFormRegister<FieldValues>
}
