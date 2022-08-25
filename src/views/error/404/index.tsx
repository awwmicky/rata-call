import { Button, Container, Group, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
// import { PATH } from '../../../utils'
import { useStyles } from './_.styles'

const CONTENT = {
  error_label: '404',
  title: 'Nothing to see here',
  description: (
    `You have found a secret place,
    this 404 page. You may have mistyped the address,
    or the page has been moved to another URL.`
  ),
  btn_text: 'Take me back to home page',
}

const Error404 = () => {
  const { classes } = useStyles()

  return (
    <Container className={ classes.root }>
      <div className={ classes.label }>{ CONTENT.error_label }</div>
      <Title className={ classes.title }>{ CONTENT.title }</Title>

      <Text size="lg" align="center" color="dimmed" className={ classes.description }>
        { CONTENT.description }
      </Text>

      <Group position="center">
        <Button
          component={ Link }
          to="/"
          variant="outline"
          size="md"
        >{ CONTENT.btn_text }
        </Button>
      </Group>
    </Container>
  )
}

export { Error404 }
