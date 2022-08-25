import { FC, ReactNode } from 'react'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import { Footer, Header } from '@/components/layout'
import * as Page from '@/views'

/* FIXME: path, Page */

interface IProviderProps {
  children?: ReactNode
}

const ROUTES_PAGE = [
	{ index: true, element: <Page.App /> },
	// { path: '/app', element: <Page.App /> },
	{	path: '/505',	element: <Page.Error500 /> },
  {	path: '/404',	element: <Page.Error404 /> },
	{ path: '*', element: <Navigate to="/404" replace /> },
]

interface INestedRoutesProps {
  routes: typeof ROUTES_PAGE
}

const NestedRoutes: FC<INestedRoutesProps> = ({ routes=[] }) => useRoutes(routes)

export const RouterProvider: FC<IProviderProps> = () => (
	<BrowserRouter>
		<Header />
		<NestedRoutes routes={ ROUTES_PAGE } />
		<Footer />
	</BrowserRouter>
)
