import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    border: `1px solid ${ theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2] }`,
    padding: `${ theme.spacing.sm }px ${ theme.spacing.xl }px`,
    // paddingLeft: theme.spacing.xl - theme.spacing.md, // to offset drag handle
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
		// zIndex: 1,
  },

  dragContianer: {
    boxShadow: theme.shadows.sm,
  },

  dragHandle: {
    ...theme.fn.focusStyles(),
		// cursor: 'grab',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: '7px 7px',
		marginLeft: '15px',
		borderRadius: '5px',
		':hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.05)',
		},
  },

	dragActive: {
		// cursor: 'grabbing',
		boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(34, 33, 81, 0.15)',
  },
}))
