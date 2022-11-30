const content = {
	title: 'RATA Call | Productivity App',
	description: 'Make a call, record the data, and simplify the process of developing RESTful APIs',
	keywords: 'vite, typescript, react, mantine ui, react query, react hook form, react router, zustand',
	author: 'michael f alvarez, m-f-alvarez@outlook.com, 650-260-8682',
	link: 'https://rata-call-app.netlify.app/',
	link_name: 'rata-call-app.netlify.app',
	thumbnail: '/thumbnail.png',
	img_alt: '🎈',
}

const headContent = [
	{	name: 'title', content: content.title },
	{ name: 'description', content: content.description },
	{ name: 'keywords', content: content.keywords },
	{ name: 'author',  content: content.author },
]

const ogContent = [
	{ property: 'og:type', content: 'website' },
	{ property: 'og:image:alt', content: content.img_alt },
	{ property: 'og:site_name', content: content.link_name },
	{ property: 'og:url', content: content.link },
	{ property: 'og:image', content: content.thumbnail },
	{ property: 'og:title', content: content.title },
	{ property: 'og:description', content: content.description },
]

const altOgContent = [
	{ name: 'twitter:card', content: 'summary_large_image' },
	{ name: 'twitter:image:alt', content: content.img_alt },
	{ property: 'twitter:domain', content: content.link_name },
	{ property: 'twitter:url', content: content.link },
	{ name: 'twitter:image', content: content.thumbnail },
	{ name: 'twitter:title', content: content.title },
	{ name: 'twitter:description', content: content.description },
]

export const htmlPluginOptions = {
	metas: [
    ...headContent,
		...ogContent,
		...altOgContent,
  ],
	links: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico',
		},
		{
			rel: 'apple-touch-icon',
			type: 'image/png',
			href: '/favicon.png',
		},
	],
}
