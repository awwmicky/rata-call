import { Children, FC, ReactNode } from 'react'
import { Avatar, Container, Group, HoverCard, Text, Title } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { useStyles } from './_.styles'

const NAV_LINKS = [ { link: '/', label: 'App' } ]

interface INavItemProps {
	children?: ReactNode
	link: string
	label: string
	[key: string]: any
}

const NavItem: FC<INavItemProps> = ({ children, link, label, ...rest }) => (
	<NavLink to={ link } { ...rest } children={ label ?? children } />
)

const Header = () => {
  const { classes } = useStyles()

	return (
    <header className={ classes.header }>
      <Container className={ classes.inner }>
				<HoverCard shadow="md" position="bottom-start">
					<HoverCard.Target>
						<Group spacing="xs" className={ classes.logo }>
							<Avatar src="/favicon.png" alt="logo" sx={{ width: 'auto' }} />
							<Title order={ 4 } children="RATA" />
						</Group>
					</HoverCard.Target>
					<HoverCard.Dropdown>
						<Text size="md">RESTful API Tool App</Text>
						<Text size="sm" color="dimmed">The Developer Experience (DX)</Text>
					</HoverCard.Dropdown>
				</HoverCard>

        <Group spacing={ 5 }>
					{ Children.toArray(NAV_LINKS.map((item) => (
						<NavItem { ...item }	className={ `${ classes.link } ${ classes.linkActive }` } />
					)))}
        </Group>
      </Container>
    </header>
  )
}
// FIXME: isActive not working ??
export { Header }
