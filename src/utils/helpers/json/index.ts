type TJson = unknown | unknown[]

export const parseJsonEntry = (val: string) => {
	const objStr = Object.prototype.toString
	try {
		const obj = JSON.parse(val)
		if (objStr.call(obj) !== '[object Object]') return undefined
		return obj
	} catch (error) {
		return undefined
	}
}

export const parseJsonFormat = (arr: { [key: string]: string }[]) => {
	const regexNumbersOnly = /^\d+$/
	const regexOperatorsOnly = /\b(true|false|null)\b/
	const regexWordStringsOnly = /^[\w\s._\-\/]+$/

	const result = arr.reduce((obj, item) => {
		item.keys = item.keys.trim().toLowerCase()
		item.value = item.value.trim().toLowerCase()

		if (!item.show || !item.keys || !item.value) return obj

		if (regexWordStringsOnly.test(item.value)) {
			obj[item.keys] = item.value
		}
		if (regexNumbersOnly.test(item.value) || regexOperatorsOnly.test(item.value)) {
			obj[item.keys] = JSON.parse(item.value)
		}

		return obj
	}, {})

	const isEmpty = Object.entries(result).length === 0
	return !isEmpty ? result : undefined
}

export const stringJsonFormat = (json: TJson, indent = 2) => JSON.stringify(json, null, indent)

export const copyToObjStr = (arr: any) => stringJsonFormat(parseJsonFormat(arr))
