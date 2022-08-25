import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	header: {
		marginBottom: 20,
    borderBottom: `1px solid ${ theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2] }`,
	},

	inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
		flexWrap: 'wrap',
    height: '100%',
		paddingBlock: theme.spacing.sm,
  },

	logo: {
		cursor: 'help'
	},

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&.active, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}))

