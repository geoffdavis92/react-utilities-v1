export default [
	{
		title: 'Article',
		type: 'class',
		intro: `Creates an article element with an ID and title. Can also be used to template documentation.`,
		deps: []
	},
	{
		title: 'CodeBlock',
		type: 'function',
		intro: `Renders a block of preformatted text, used for demonstrating code.`,
		deps: []
	},
	{
		title: 'ExternalLink',
		type: 'function',
		intro: `Creates an anchor tag, which opens in a blank tab and protects against the target="_blank" vulnerability.`,
		deps: []
	},
	{
		title: 'NavLink',
		type: 'class',
		intro: 'Extends Link from React Router, only active on Index.',
		deps: [
			{
				name: 'React-Router',
				intro: 'Keeps URL consistent with app state/location.'
			}
		]
	}
]