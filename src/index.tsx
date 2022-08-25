import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import * as Context from '@/utils/context'

const App = () => (
	<StrictMode>
		<Context.ThemeProvider>
			<Context.QueryProvider>
				<Toaster />
				<Context.RouterProvider />
			</Context.QueryProvider>
		</Context.ThemeProvider>
	</StrictMode>
)

createRoot(document.getElementById('root')!).render(<App />)
