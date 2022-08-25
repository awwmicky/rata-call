const color = {
	primary: '#339AF0',
	secondary: '#abdcff',
	white: '#FFFFFF',
}

export const webAccessoryStyles = {
	'::selection': {
    'backgroundColor': color.primary,
		'color': color.white,
	},

	'::-webkit-resizer': {
		'backgroundColor': 'transparent',
	},
	'::-webkit-scrollbar': {
		// 'backgroundColor': 'transparent',
		'width': '0.75rem',
	},
	'::-webkit-scrollbar-corner': {
		'backgroundColor': 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		'border': '3.5px solid transparent',
		// 'border-radius': '1.5em',
		'backgroundColor': color.secondary,
		// 'background-clip': 'content-box',
	},
	'::-webkit-scrollbar-thumb:hover': {
		'backgroundColor': color.primary,
		// 'background-clip': 'content-box',
	},
}
