import { DevIcon, InfoIcon } from '@/components/core'

export const content = {
	moreInfo: 'For more info',
	techUsed: 'Technologies used',
	madeBy: 'Concept project made by Michael Alvarez',
}

export const moreInformation = [
	{ title: 'Portfolio', icon: InfoIcon.Portfolio, link: 'https://aww-micky.web.app/' },
	{ title: 'Codebase', icon: InfoIcon.Codebase, link: 'https://github.com/awwmicky/rata-call' },
]

export const allTechnologies = [
	{ title: 'Vite', icon: DevIcon.Vite, link: 'https://vitejs.dev/' },
	{ title: 'TypeScript', icon: DevIcon.TypeScript, link: 'https://typescriptlang.org/' },
	{ title: 'React', icon: DevIcon.React, link: 'https://reactjs.org/' },
	{ title: 'Mantine UI', icon: DevIcon.MantineUI, link: 'https://mantine.dev/' },
	{ title: 'React Router', icon: DevIcon.ReactRouter, link: 'https://reactrouter.com/' },
	{ title: 'React Query', icon: DevIcon.ReactQuery, link: 'https://tanstack.com/query/v4' },
	{ title: 'React Hook Form', icon: DevIcon.ReactHookForm, link: 'https://react-hook-form.com/' },
	{ title: 'Zustand', icon: DevIcon.Zustand, link: 'https://zustand-demo.pmnd.rs/' },
]
