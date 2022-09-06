import { FC, ReactNode } from 'react'
import { Anchor, Avatar, Container, Group, HoverCard, Text, Title } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { useStyles } from './_.styles'

// const NAV_LINKS = [ { link: '/', label: 'App' } ]
const NAV_LINK = { link: '/', label: 'App' }
const ALT_LINK = { link: 'https://github.com/Arcane-404/rata', label: 'GitHub' }

interface INavItemProps {
	children?: ReactNode
	link: string
	label: string
	[key: string]: any
}

const NavItem: FC<INavItemProps> = ({ children, link, label, ...rest }) => (
	<NavLink to={ link } { ...rest } children={ label ?? children } />
)

const LinkItem: FC<INavItemProps> = ({ children, link, label, ...rest }) => (
	<Anchor href={ link } { ...rest } target="_blank" children={ label ?? children } />
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
						<NavItem { ...NAV_LINK }	className={ `${ classes.link } ${ classes.linkActive }` } />
						<LinkItem { ...ALT_LINK }	className={ `${ classes.link }` } />
        </Group>
      </Container>
    </header>
  )
}

export { Header }
// FIXME: isActive not working via react-router ??
