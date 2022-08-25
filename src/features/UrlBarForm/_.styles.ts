import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	form: {
		gap: 16,
		display: 'flex',
		flexWrap: 'wrap',
		[theme.fn.smallerThan('xs')]: {
			justifyContent: 'space-between',
		},
	},

	selectField: {
		flex: '0 1 12.5ch',
		[theme.fn.smallerThan('xs')]: {
			order: 2,
		},
	},

	textField: {
		flex: '1 1 auto',
		[theme.fn.smallerThan('xs')]: {
			order: 1,
			width: '100%',
		},
	},

	submitButton: {
		flex: '0 1 13.5ch',
		[theme.fn.smallerThan('xs')]: {
			order: 2,
		},
	},
}))
