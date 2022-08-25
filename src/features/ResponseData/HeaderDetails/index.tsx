import { Children, FC } from 'react'
import { Table } from '@mantine/core'

const TABLE_HEADER = [ 'Key', 'Value' ]

interface IHeaderDetailsProps {
	data?: {
		key: string
		value: string
	}[]
}

const HeaderDetails: FC<IHeaderDetailsProps> = ({ data }) => {
	const Head = (
		<tr>
			{ Children.toArray(TABLE_HEADER.map((value) => (
				<th>{value}</th>
			))) }
		</tr>
	)

	const Body = Children.toArray(data?.map((item) => (
		<tr>
			<td>{item.key}</td>
			<td>{item.value}</td>
		</tr>
	)))

	return (
		<Table striped>
			<thead>{Head}</thead>
			<tbody>{Body}</tbody>
		</Table>
	)
}

export { HeaderDetails }
