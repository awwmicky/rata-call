import { useState } from 'react'
import { Badge, Card, Tabs, Title } from '@mantine/core'
import { useGlobalStore } from '@/services'
import { FormatOption } from './FormatOption'

// TODO: chores: improve to scale

const TABS_OPTIONS = {
	query: { value: 'query', label: 'Query' },
	// params: { value: 'params', label: 'Params' },
	body: { value: 'body', label: 'Body' },
	headers: { value: 'headers', label: 'Headers' },
}

const RequestData = () => {
	const records = useGlobalStore((state) => state.records)
	const [ activeTab, setActiveTab ] = useState<string | null>(TABS_OPTIONS.query.value)

	const queryCount = (records.query) && Object.entries(records.query).length
	const bodyCount = (records.body) && Object.entries(records.body).length
	const headersCount = (records.headers) && Object.entries(records.headers).length

	return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
			<Title order={ 2 } children="Request Data" />

			<Tabs value={ activeTab } onTabChange={ setActiveTab }>
				<Tabs.List>
					<Tabs.Tab
						value={ TABS_OPTIONS.query.value }
						rightSection={ queryCount && <Notification count={ queryCount } /> }
						children={ <b>{ TABS_OPTIONS.query.label }</b> }
					/>
					<Tabs.Tab
						value={ TABS_OPTIONS.body.value }
						rightSection={ bodyCount && <Notification count={ bodyCount } /> }
						children={ <b>{ TABS_OPTIONS.body.label }</b> }
					/>
					<Tabs.Tab
						value={ TABS_OPTIONS.headers.value }
						rightSection={ headersCount && <Notification count={ headersCount } /> }
						children={ <b>{ TABS_OPTIONS.headers.label }</b> }
					/>
				</Tabs.List>

				<Tabs.Panel value={ TABS_OPTIONS.query.value }>
					<FormatOption
						activeTab={ activeTab }
						confirmTab={ activeTab === TABS_OPTIONS.query.value }
					/>
				</Tabs.Panel>
				<Tabs.Panel value={ TABS_OPTIONS.body.value }>
					<FormatOption
						activeTab={ activeTab }
						confirmTab={ activeTab === TABS_OPTIONS.body.value }
					/>
				</Tabs.Panel>
				<Tabs.Panel value={ TABS_OPTIONS.headers.value }>
					<FormatOption
						activeTab={ activeTab }
						confirmTab={ activeTab === TABS_OPTIONS.headers.value }
					/>
				</Tabs.Panel>
			</Tabs>
    </Card>
  )
}

const Notification = ({ count=0 }) => (
	<Badge
		sx={{ width: 16, height: 16, pointerEvents: 'none' }}
		variant="filled"
		size="xs"
		p={ 0 }
		children={ count }
	/>
)

export { RequestData }
