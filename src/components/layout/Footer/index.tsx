import { Children } from 'react'
import { ActionIcon, Button, Code, Container, Group } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { useStyles } from './_.styles'
import { allTechnologies, socialLinks } from './_constants'

const Footer = () => {
	const [ showTechnologies, toggle ] = useToggle([ false, true ])
  const { classes } = useStyles()

  return (
    <footer className={ classes.footer }>
      <Container className={ classes.inner }>
        <Code
					children="Created by Michael F Alvarez"
					color="blue"
					className={ classes.text }
        />
				<Group spacing="xs" position="right" noWrap>
					{ Children.toArray(socialLinks.map((item) => (
						<ActionIcon
							component="a"
							size="lg"
							variant="default"
							radius="xl"
							target="_blank"
							title={ item.title }
							href={ item.link }
							children={ <item.Icon /> }
						/>
					)
					))}
				</Group>
				<Group spacing="xs" position="center" sx={{ width: '100%' }}>
					{	(!showTechnologies)
						? (
								<Button
									children="view technologies used"
									variant="subtle"
									color="gray"
									size="xs"
									compact
									onClick={ () => toggle() }
								/>
							)
						: Children.toArray(allTechnologies.map((item) => (
							<ActionIcon
								component="a"
								size="lg"
								variant="subtle"
								target="_blank"
								title={ item.title }
								href={ item.link }
								children={ <item.Icon /> }
							/>
						)))}
				</Group>
      </Container>
    </footer>
  )
}

export { Footer }
