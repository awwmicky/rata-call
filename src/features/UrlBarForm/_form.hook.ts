import { useMemo } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { delay } from '@/utils/helpers'
import { TUrlBarForm, URL_BAR_FIELD, urlBarOptions } from '@/utils/schema'
import { useQueryData } from './_query.hook'

export const useUrlBarForm = () => {
	const methods = useForm<TUrlBarForm>(urlBarOptions)
  const { handleSubmit, watch, getValues, formState: { isSubmitting, isDirty } } = methods
	const { fetchData } = useQueryData(getValues())

	const select_method = watch('select_method')
	watch('url_endpoint')

  const onSubmit: SubmitHandler<TUrlBarForm> = async (_data) => {
    // console.info('[form-data]', data) // TODO:
    try {
      await delay(1500)
			await fetchData()
    } catch (error) {
      // console.warn('[form-issue]', error) // TODO:
    }
  }

	const onErrors: SubmitErrorHandler<TUrlBarForm> = (errors) => {
		// console.warn('[form-error]', errors) // TODO:
		const errorKey = Object.keys(errors)[0] as 'select_method' | 'url_endpoint'
		const errorMessage = errors[errorKey]?.message as string
		toast.error(errorMessage, { position: 'bottom-center' })
  }

	const colorMethod = useMemo(() => {
		switch (select_method) {
			case 'GET': return 'blue'
			case 'POST': return 'green'
			case 'PUT': return 'yellow'
			case 'PATCH': return 'orange'
			case 'DELETE': return 'red'
			default: return 'dark'
		}
	}, [ select_method ])

	return {
		field: URL_BAR_FIELD,
		isSubmitting,
		isDirty,
		handleSubmit: handleSubmit(onSubmit, onErrors),
		methods,
		colorMethod,
  }
}
