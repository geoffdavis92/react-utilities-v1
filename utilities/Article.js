import React, { Component } from 'react'

export let ArticleDetails = {
	componentTag: '<Article/>',
	props: [
		{
			name: 'id',
			type: 'String'
		},
		{
			name: 'title',
			type: 'String'
		},
		{
			name: 'component',
			type: 'Object',
			optional: true
		}
	]
}

export let ArticleExample1 = `<Article id={ArticleID} title={ArticleTitle}>
  {this.props.children}
</Article>`

export default class Article extends Component {
	render() {
		return (
			<article id={this.props.id}>
				<h5><u>{this.props.title}</u></h5>
				{((t=this) => {
					let details = t.props.component || false
					if (details) {
						return (
							<ul>
								<li><strong>Component tag:</strong> <code>{details.componentTag}</code></li>
								{details.props ? <li><strong>Props:</strong>
									<ul>
										{details.props ? details.props.map((prop,i) => <li key={i}>{prop.name}: <code>{typeof prop.type == 'object' && prop.type.length ? prop.type.join(', ') : prop.type}</code>{prop.optional ? ' (optional)' : ''}</li>) : <li>No props</li>}
									</ul>
								</li> : ''}
								{details.deps ? <li><strong>Dependencies:</strong>
									<ul>
										{details.deps ? details.deps.map((dep,i) => <li key={i}>{dep.link ? <a href={dep.link} target="_blank" rel="noopener noreferrer">{dep.name}</a> : `${dep.name}` }{ dep.desc ? `: ${dep.desc}` : ''}</li>) : <li>No dependencies</li>}
									</ul>
								</li> : ''}
							</ul>
						)
					}
				})(this)}
				{this.props.children}
			</article>
		)
	}
}