import { Button, Container, Group, Text, Title } from '@mantine/core'
import { NavLink } from 'react-router-dom'
// import { PATH } from '../../../utils'
import { useStyles } from './_.styles'

const CONTENT = {
  error_label: '500',
  title: 'Something bad just happened...',
  description: (
    `Our servers could not handle your request.
    Don't worry, our development team was already notified.
    Try refreshing the page.`
  ),
  btn_text: 'Refresh the page',
}

const Error500 = () => {
  const { classes } = useStyles()

  return (
    <Container className={ classes.root }>
      <div className={ classes.label }>{ CONTENT.error_label }</div>
      <Title className={ classes.title }>{ CONTENT.title }</Title>

      <Text size="lg" align="center" className={ classes.description }>
        { CONTENT.description }
      </Text>

      <Group position="center">
        <Button
          component={ NavLink }
          to="*"
          variant="light"
          size="md"
        >{ CONTENT.btn_text }
        </Button>
      </Group>
    </Container>
  )
}

export { Error500 }
