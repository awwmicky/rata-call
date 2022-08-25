import { zodResolver } from '@hookform/resolvers/zod'
import * as Z from 'zod'

// const requestDataOptions = [
//   { value: 'ENTRY', label: 'ENTRY' },
//   { value: 'JSON', label: 'JSON' },
// ]

// const requestDataTab = {
//   'query': 'query',
// 	'params': 'params',
//   'body': 'body',
//   'header': 'header',
// }

/*  */

const dataEntrySchema = Z.object({
	'key_value': Z.array(Z.object({
		'keys': Z.string(), // obj key format rules
		'value': Z.string(), // must be string, number, boolean
	}))
})

export type TDataEntryForm = Z.TypeOf<typeof dataEntrySchema>

export const dataEntryOptions = {
  resolver: zodResolver(dataEntrySchema),
  reValidateMode: 'onChange' as 'onChange',
	mode: 'onChange' as 'onChange',
}
// defaultValues: { 'key_value': defaultValues }
