import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 20,
    borderTop: `1px solid ${ theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2] }`,
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
		flexWrap: 'wrap',
		paddingBlock: theme.spacing.sm,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
			gap: 8,
    },
  },

	text: {
		fontWeight: 600,
	},

  links: {
    [theme.fn.smallerThan('xs')]: {
			marginInline:  `${ theme.spacing.lg }px ${ theme.spacing.sm }px`,
    },
  },
}))
