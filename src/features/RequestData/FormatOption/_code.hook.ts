import { useState } from 'react'

const useCode = (initialValue: string) => {
	const [ code, setCode ] = useState(initialValue)

	const resetCode = () => setCode(initialValue)

	return {
		code,
		setCode,
		resetCode,
	}
}

export { useCode }
