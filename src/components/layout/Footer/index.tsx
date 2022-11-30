import { Children } from 'react'
import { ActionIcon, Box, Code, Container, Group, Text } from '@mantine/core'
import { useStyles } from './_.styles'
import { allTechnologies, content, moreInformation } from './_constants'

const Footer = () => {
  const { classes } = useStyles()

  return (
    <footer className={ classes.footer }>
      <Container className={ classes.inner }>
				<Group className={ classes.top }>
					<Box className={ classes.box1 }>
						<Text className={ classes.text }>{ content.moreInfo }</Text>
						<Group spacing="xs">
							{ Children.toArray(moreInformation.map((item) => (
								<ActionIcon
									component="a"
									size="lg"
									variant="default"
									radius="xl"
									target="_blank"
									title={ item.title }
									href={ item.link }
									children={ <item.icon /> }
								/>
							)))}
						</Group>
					</Box>

					<Box className={ classes.box2 }>
						<Text className={ classes.text }>{ content.techUsed }</Text>
						<Group spacing="xs">
							{	Children.toArray(allTechnologies.map((item) => (
								<ActionIcon
									component="a"
									size="lg"
									variant="subtle"
									target="_blank"
									title={ item.title }
									href={ item.link }
									children={ <item.icon /> }
								/>
							)))}
						</Group>
					</Box>
				</Group>

				<Code
					color="blue"
					mt={ 8 }
					className={ classes.text }
					children={ content.madeBy }
				/>
      </Container>
    </footer>
  )
}

export { Footer }
