import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 20,
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
		flexDirection: 'column',
		// flexWrap: 'wrap',
		paddingBlock: theme.spacing.sm,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
			gap: 8,
    },
  },

	top: {
		width: '100%',
		display: 'flex',
    justifyContent: 'space-between',

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
    },
	},

	box1: {
		order: 2,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		textAlign: 'right',

		[theme.fn.smallerThan('xs')]: {
			order: 1,
			alignItems: 'center',
			textAlign: 'center',
    },
	},

	box2: {
		order: 1,
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'left',

		[theme.fn.smallerThan('xs')]: {
			order: 2,
			alignItems: 'center',
			textAlign: 'center',
    },
	},

	text: {
		fontWeight: 600,
	},

}))
