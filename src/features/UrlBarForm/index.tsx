import { useRef } from 'react'
import { Card, Sx } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import { Icon } from '@/components/core'
import { Form, SelectField, SubmitButton, TextField } from '@/components/shared'
import { FormDataProvider } from '@/utils/context'
import { useStyles } from './_.styles'
import { useUrlBarForm } from './_form.hook'

const UrlBarForm = () => {
	const inputRef = useRef<HTMLInputElement>(null!)
  const { classes } = useStyles()
	const { field, ...form } = useUrlBarForm()

	const sxCard: Sx = (theme) => ({ overflow: 'unset', borderTop: `3px solid ${ theme.colors[form.colorMethod][5] }` })
	useHotkeys([ [ '/', () => inputRef?.current?.focus() ] ])

  return (
		<FormDataProvider methods={ form.methods }>
			<Card shadow="sm" p="lg" radius="md" withBorder sx={ sxCard }>
				<Form onSubmit={ form.handleSubmit } className={ classes.form }>
					<SelectField
						className={ classes.selectField }
						{ ...field.select_method }
					/>

					<TextField
						ref={ inputRef }
						className={ classes.textField }
						{ ...field.url_endpoint }
					/>

					{/* <Input ref={ inputRef } /> */}

					<SubmitButton
						label="Send"
						className={ classes.submitButton }
						color={ form.colorMethod }
						rightIcon={ !form.isSubmitting && <Icon.Send /> }
						isSubmitting={ form.isSubmitting }
					/>
				</Form>
			</Card>
		</FormDataProvider>
  )
}

export { UrlBarForm }
