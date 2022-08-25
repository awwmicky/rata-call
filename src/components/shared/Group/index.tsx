import React, { Children, FC } from 'react'
import { Radio } from '@mantine/core'

interface IRadioGroupProps {
	value: string
	onChange: React.Dispatch<React.SetStateAction<string>>
	data: {
		value: string
		label: string
	}[]
  [x: string]: any
}

const RadioGroup: FC<IRadioGroupProps> = ({ data, ...rest }) => (
	<Radio.Group { ...rest }>
		{ Children.toArray(data?.map((option) => (
			<Radio { ...option } />
		))) }
	</Radio.Group>
)

export { RadioGroup }
