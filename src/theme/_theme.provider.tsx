import React, { FC } from 'react'
import { MantineProvider } from '@mantine/core'
import { GlobalStyle } from './_GlobalStyle'

interface IProviderProps {
  children?: React.ReactNode
}

export const ThemeProvider: FC<IProviderProps> = ({ children }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
  >
    <GlobalStyle />
    { children }
  </MantineProvider>
)
