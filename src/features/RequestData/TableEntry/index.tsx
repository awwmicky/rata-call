import { FC, KeyboardEvent, useEffect, useRef } from 'react'
import { ActionIcon, Button, Group } from '@mantine/core'
import { useWatch } from 'react-hook-form'
import { Icon } from '@/components/core'
import { CheckboxField, TextField } from '@/components/shared'
import { useGlobalStore } from '@/services'
import { FormDataProvider } from '@/utils/context'
import { parseJsonFormat } from '@/utils/helpers'
import { DragNDrop } from '../../DragNDrop'

interface IEntryData {
	id: string | number
	keys: string
	value: string
	show: boolean
}

interface ITableEntryProps {
	init: IEntryData[]
	activeTab?: string | null
	confirmTab?: boolean
	fields: IEntryData[]
	form: any // FIXME:
}

interface IEntryItemProps extends IEntryData {
	isDisabled?: boolean
	addNewEntry?: () => void
  removeEntry?: () => void
	toggleEntry?: () => void
	name: { [key: string]: string }
}

/*  */

const TableEntry: FC<ITableEntryProps> = ({
	init,
	activeTab,
	confirmTab,
	fields,
	form,
}) => {
	const updateRecords = useGlobalStore((state) => state.updateRecords)
	const key_value = useWatch({ control: form.control, name: 'key_value' })

	const addNewEntry = () => form.append(init[0])
	const removeEntry = (id: number) => form.remove(id)
	const resetEntry = () => form.reset({ 'key_value': init })
	// const toggleEntry = (id: number) => form.update(id, { ...fields[id], show: !fields[id].show })
	const copyEntry = () => form.copy()

	useEffect(() => {
		if (confirmTab) updateRecords(parseJsonFormat(key_value), activeTab as string)
	}, [ key_value, activeTab, confirmTab, updateRecords ])

  return (
		<div>
			<FormDataProvider methods={ form.methods }>
				<DragNDrop items={ fields } reorder={ form.move }>
					{ (entry, index) => (
						<EntryItem
							{ ...entry }
							isDisabled={ !key_value[index]?.show }
							addNewEntry={ () => (fields.length - 1 === index) && addNewEntry() }
							removeEntry={ () => removeEntry(index) }
							name={{
								key: `key_value.${ index }.keys`,
								value: `key_value.${ index }.value`,
								show: `key_value.${ index }.show`,
							}}
						/>
					) }
				</DragNDrop>

				<Group>
					<Button children={ <Icon.Plus /> } onClick={ addNewEntry } variant="filled" />
					<Button children={ <Icon.Refresh /> } onClick={ resetEntry } variant="outline" />
					<Button children={ <Icon.Copy /> } onClick={ copyEntry } variant="outline" />
				</Group>
			</FormDataProvider>
		</div>
  )
}

const EntryItem: FC<IEntryItemProps> = ({
	name,
	isDisabled,
	addNewEntry,
	removeEntry,
}) => {
	const inputKeyRef = useRef<HTMLInputElement>(null!)
	const inputValueRef = useRef<HTMLInputElement>(null!)
	const onInputKey = (e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') && inputValueRef?.current?.focus()
	const onInputValue = (e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') && addNewEntry?.()

  return (
    <Group position="apart" sx={{ width: '100%' }}>
			<Group>
				<TextField ref={ inputKeyRef } disabled={ isDisabled } placeholder="Enter key" name={ name.key } onKeyUp={ onInputKey } />
				<TextField ref={ inputValueRef } disabled={ isDisabled } placeholder="Enter value" name={ name.value } onKeyUp={ onInputValue } />
			</Group>
			<Group>
				<CheckboxField size="lg" color="indigo" icon={ Icon.Checkbox } name={ name.show } />
				<ActionIcon variant="filled" color="pink" size={ 30 } children={ <Icon.Remove /> } onClick={ removeEntry } />
			</Group>
    </Group>
  )
}

export { TableEntry }
