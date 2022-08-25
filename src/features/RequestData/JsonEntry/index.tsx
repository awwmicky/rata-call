import React, { FC, useEffect } from 'react'
import { useGlobalStore } from '@/services'
import { parseJsonEntry } from '@/utils/helpers'
import { CodeEditor } from '../../CodeEditor'

interface IJsonEntryProps {
	init: string
	activeTab?: string | null
	confirmTab?: boolean
	code: string
	setCode: React.Dispatch<React.SetStateAction<string>>
}

const JsonEntry: FC<IJsonEntryProps> = ({
	init,
	activeTab,
	confirmTab,
	code,
	setCode,
}) => {
	const updateRecords = useGlobalStore((state) => state.updateRecords)

	useEffect(() => {
		if (confirmTab) updateRecords(parseJsonEntry(code), activeTab as string)
	}, [ code, activeTab, confirmTab, updateRecords ])

	return (
		<CodeEditor
			clipboard
			reset={ init }
			value={ code }
			onChange={ setCode }
		/>
	)
}

export { JsonEntry }
