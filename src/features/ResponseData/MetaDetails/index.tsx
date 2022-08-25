import { FC, useMemo } from 'react'
import { Badge, Group, Title } from '@mantine/core'

interface IMetaDetailsProps {
	statusCode?: number
	statusText?: string
	durationTime?: string
	payloadSize?: string
}

const MetaDetails: FC<IMetaDetailsProps> = ({
	statusCode = 0,
	statusText = '---',
	durationTime = '---',
	payloadSize = '---',
}) => {

	const color = useMemo(() => {
		if (200 <= statusCode && statusCode <= 399) return 'green'
		if (400 <= statusCode && statusCode <= 599) return 'red'
		return 'blue'
	}, [ statusCode ])

	return (
    <Group my={ 20 }>
      <Title order={ 6 }>Status: <Badge children={ statusText } color={ color } size="lg" radius="sm" variant="filled" /></Title>
      <Title order={ 6 }>Time: <Badge children={ durationTime } size="lg" radius="sm" /></Title>
      <Title order={ 6 }>Size: <Badge children={ payloadSize } size="lg" radius="sm" /></Title>
    </Group>
  )
}

export { MetaDetails }
