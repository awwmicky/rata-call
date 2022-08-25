import { useClipboard } from '@mantine/hooks'
import { useFieldArray, useForm } from 'react-hook-form'
import { copyToObjStr } from '@/utils/helpers'

// FIXME: this is a duplicate
interface IEntry {
	id: string
	keys: string
	value: string
	show: boolean
}

const useTableField = (initialValues: IEntry[]) => {
  const clipboard = useClipboard()
	const methods = useForm({ defaultValues: { 'key_value': initialValues } })
	const { control, reset, getValues } = methods
  const { append, move, update, remove, fields } = useFieldArray({ control, name: 'key_value' })
	const copy = () => clipboard.copy(copyToObjStr(getValues('key_value')))

	return {
		fields,
		append,
		move,
		update,
		remove,
		reset,
		copy,
		control,
		methods,
	}
}

export { useTableField }
