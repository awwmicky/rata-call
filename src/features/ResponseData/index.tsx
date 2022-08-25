import { useEffect, useState } from 'react'
import { Card, Tabs, Title } from '@mantine/core'
import { useGlobalStore } from '@/services'
import { stringJsonFormat } from '@/utils/helpers'
import { CodeEditor } from '../CodeEditor'
import { HeaderDetails } from './HeaderDetails'
import { MetaDetails } from './MetaDetails'

const edits = `{ }`

const TABS_OPTIONS = {
	body: { value: 'body', label: 'Body' },
	headers: { value: 'headers', label: 'Headers' },
}

const ResponseData = () => {
	const results = useGlobalStore((state) => state.results)
	const [ activeTab, setActiveTab ] = useState<string | null>(TABS_OPTIONS.body.value)
  const [ code, setCode ] = useState(edits)

	useEffect(() => {	if (results) setCode(stringJsonFormat(results?.data)) }, [ results ])

  return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Title order={ 2 } children="Response Data" />

      <MetaDetails
				statusCode={ results?.metadata?.statusCode }
				statusText={ results?.metadata?.statusText }
				durationTime={ results?.metadata?.durationTime }
				payloadSize={ results?.metadata?.payloadSize }
      />

			<Tabs value={ activeTab } onTabChange={ setActiveTab }>
				<Tabs.List mb={ 12 }>
					<Tabs.Tab
						value={ TABS_OPTIONS.body.value }
						children={ <b>{TABS_OPTIONS.body.label}</b> }
					/>
					<Tabs.Tab
						value={ TABS_OPTIONS.headers.value }
						children={ <b>{TABS_OPTIONS.headers.label}</b> }
					/>
				</Tabs.List>

				<Tabs.Panel
					value={ TABS_OPTIONS.body.value }
					children={ <CodeEditor clipboard readOnly value={ code } onChange={ setCode } /> }
				/>
				<Tabs.Panel
					value={ TABS_OPTIONS.headers.value }
					children={ <HeaderDetails data={ results?.headers } /> }
				/>
			</Tabs>
    </Card>
  )
}

export { ResponseData }
