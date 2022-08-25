import { FC, useState } from 'react'
import { RadioGroup } from '@/components/shared'
import { JsonEntry } from '../JsonEntry'
import { TableEntry } from '../TableEntry'
import { useCode } from './_code.hook'
import { useTableField } from './_field.hook'

interface IFormatOption {
	activeTab?: string | null
	confirmTab?: boolean
}

const RADIO_GROUP_FIELD = {
  label: 'Format:',
  data: [
    { value: 'table', label: 'TABLE' },
    { value: 'json', label: 'JSON' },
  ],
	sx: {
		gap: 12,
		display: 'flex',
		marginBlock: 12,
		'& [role="radiogroup"]': {
			paddingTop: 0,
		}
	},
}

const INIT_TABLE_ENTRY = [ { id: '_', keys: '', value: '', show: true } ]
const INIT_JSON_ENTRY = `{\n\t""\n}`

const FormatOption: FC<IFormatOption> = ({ activeTab, confirmTab }) => {
	// const updateRecords = useGlobalStore((state) => state.updateRecords)
	const [ format, setFormat ] = useState(RADIO_GROUP_FIELD.data[0].value)
	const { fields, ...form } = useTableField(INIT_TABLE_ENTRY)
  const { code, setCode } = useCode(INIT_JSON_ENTRY)

	const tableEntryProps = {
		init: INIT_TABLE_ENTRY,
		activeTab,
		confirmTab,
		fields,
		form,
	}

	const jsonEntryProps = {
		init: INIT_JSON_ENTRY,
		activeTab,
		confirmTab,
		code,
		setCode,
	}

	return (
		<>
			<RadioGroup { ...RADIO_GROUP_FIELD }  value={ format } onChange={ setFormat } />
			{ (format === 'table') && <TableEntry { ...tableEntryProps } /> }
			{ (format === 'json') && <JsonEntry { ...jsonEntryProps } /> }
		</>
	)
}

export { FormatOption }
