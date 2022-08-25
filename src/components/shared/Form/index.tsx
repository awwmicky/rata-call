import { FC, forwardRef, ReactNode } from 'react'
import { Box, Button, Checkbox, Select, TextInput } from '@mantine/core'
import { Controller, useFormContext } from 'react-hook-form'

interface IFormProps {
	children?: ReactNode
	[key: string]: any
}

interface ITextFieldProps {
	name: string
	[key: string]: any
}

interface ISelectFieldProps {
	name: string
	data: {
		value: string
		label: string
	}[]
	[key: string]: any
}

interface ISubmitButtonProps {
	children?: ReactNode
	label?: string
	isSubmitting?: boolean
	[key: string]: any
}

interface ICheckboxFieldProps {
	name: string
	[key: string]: any
}

const inputRules = {
  autoComplete: 'off',
  autoCorrect: 'off',
  autoCapitalize: 'off',
}

/*  */

export const Form: FC<IFormProps> = ({ children, sx={}, ...rest }) => (
	<Box component="form" sx={ sx } { ...rest }>{ children }</Box>
)

type TInputRef = HTMLInputElement

export const TextField: FC<ITextFieldProps> = forwardRef<TInputRef, ITextFieldProps>(({ name, sx={}, ...rest }, ref) => {
  const { control } = useFormContext()
	return (
		<Controller
			control={ control } name={ name } render={ ({ field }) => (
				<TextInput { ...field } ref={ ref } { ...inputRules } { ...rest } sx={ sx } />
			) }
		/>
	)
})

export const SelectField: FC<ISelectFieldProps> = ({ name, sx={}, ...rest }) => {
  const { control } = useFormContext()
	return (
		<Controller
			control={ control } name={ name } render={ ({ field }) => (
				<Select { ...field } { ...rest } sx={ sx } />
			) }
		/>
	)
}

export const CheckboxField: FC<ICheckboxFieldProps> = ({ name, sx={}, ...rest }) => {
	const { control } = useFormContext()
	return (
		<Controller
			control={ control } name={ name } render={ ({ field }) => (
				<Checkbox { ...field } checked={ field.value } onChange={ field.onChange } { ...rest } sx={ sx } />
			) }
		/>
	)
}

export const SubmitButton: FC<ISubmitButtonProps> = ({ children, label, isSubmitting=false, ...rest }) => (
	<Button type="submit" loaderProps={{ ml: 10 }} loading={ isSubmitting } children={ !isSubmitting && (label ?? children) } { ...rest } />
)
