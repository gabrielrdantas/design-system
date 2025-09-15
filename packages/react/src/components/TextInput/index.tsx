import {forwardRef, ComponentPropsWithoutRef  } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentPropsWithoutRef <'input'> {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, ...props }, ref) => (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  )
);

TextInput.displayName = 'TextInput'

