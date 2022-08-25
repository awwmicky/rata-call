import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface IProviderProps {
  children?: ReactNode
  dev?: boolean
}

const STALE_TIME = 5*60*1000 // 5 min

const clientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
			// refetchInterval,
			// refetchIntervalInBackground
      staleTime: STALE_TIME,
    },
  },
}

const client = new QueryClient(clientConfig)

export const QueryProvider: FC<IProviderProps> = ({ children, dev=false }) => (
  <QueryClientProvider client={ client }>
    { children }
    { dev && <ReactQueryDevtools initialIsOpen={ false } position="bottom-right" /> }
  </QueryClientProvider>
)
