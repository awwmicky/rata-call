import { Global } from '@mantine/core'
import { miscStyles, webAccessoryStyles } from './default'

export const GlobalStyle = () => (
	<Global
		styles={{
			'html, body, #root': {
				height: '100%',
			},
			'#root': {
				display: 'flex',
				flexFlow: 'column',
			},
			...miscStyles,
			...webAccessoryStyles,
		}}
	/>
)
