import { FC } from 'react'
import { Container, Sx } from '@mantine/core'

interface IProps {
  sx?: Sx | Sx[]
  [x: string]: any
}

const PageLayout: FC<IProps> = ({ sx={}, ...rest }) => (
  <Container
    { ...rest }
    sx={{
      ...sx,
			width: '100%',
			gap: 20,
      display: 'flex',
      flexFlow: 'column',
			flex: '1 1 auto',
    }}
  />
)

export { PageLayout }
