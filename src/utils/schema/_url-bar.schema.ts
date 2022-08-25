import { zodResolver } from '@hookform/resolvers/zod'
import * as Z from 'zod'
import { regexWebUrl } from '@/utils/helpers'

const selectMethod = {
  name: 'select_method' as 'select_method',
	placeholder: 'Select method',
	// value: 'GET' as 'GET',
  data: [
		{ value: 'GET' as 'GET', label: 'GET' },
		{ value: 'POST' as 'POST', label: 'POST' },
		{ value: 'PUT' as 'PUT', label: 'PUT' },
		{ value: 'PATCH' as 'PATCH', label: 'PATCH' },
		{ value: 'DELETE' as 'DELETE', label: 'DELETE' },
	],
}

const inputRules = {
  autoComplete: 'off',
  autoCorrect: 'off',
  autoCapitalize: 'off',
}

const urlInput = {
  ...inputRules,
	type: 'search',
  name: 'url_endpoint' as 'url_endpoint',
  placeholder: 'Enter URL (e.g. http://localhost:3000/api/todos)',
}

/*  */

export const INIT_URL_BAR_STATE = {
	'select_method': 'GET' as 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
	'url_endpoint': '',
}

export const URL_BAR_FIELD = {
  'select_method': selectMethod,
  'url_endpoint': urlInput,
}

const urlBarSchema = Z.object({
  'select_method': Z.enum([ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' ]),
  'url_endpoint': Z.string().trim().url().refine((val) => {
		const isUrlValid = regexWebUrl.test(val)
		// console.info('[val]', val, isUrlValid) // TODO:
		return isUrlValid
	}, {
		message: 'Improper url'
	}),
})

export type TUrlBarForm = Z.TypeOf<typeof urlBarSchema>

export const urlBarOptions = {
	defaultValues: INIT_URL_BAR_STATE,
  resolver: zodResolver(urlBarSchema),
  reValidateMode: 'onSubmit' as 'onSubmit',
}
