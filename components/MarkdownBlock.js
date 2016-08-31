import React, { Component } from 'react'
import Remarkable from 'remarkable'

export let MarkdownBlockDetails = {
	componentTag: '<MarkdownBlock/>',
	props: [
		{
			name: 'source',
			type: ['Array','String'],
			optional: true
		}
	],
	deps: [
		{
			name: 'Remarkable',
			desc: 'Markdown parser for Javascript.',
			link: 'https://www.npmjs.com/package/remarkable'
		}
	]
}

export let MarkdownBlockExample1 = `<MarkdownBlock source={\`# Section Title\`}/>`

export let MarkdownBlockExample2 = `<MarkdownBlock>
  {'# Nisi Labore Amet Id'}
  {'Fugiat ad amet nulla officia fugiat laborum ad est 
     elit deserunt dolore quis voluptate. Ex ad culpa 
     enim ex aute cillum.'}
  {'> Exercitation adipisicing veniam exercitation 
     aliqua occaecat.'}
</MarkdownBlock>`


export let MarkdownDemo = `---
##### Section Title

*This is some italic text*

**This is bold text**

> This is a quote; a blockquote, that is! Labore enim Lorem fugiat nisi <br>
esse do labore dolore quis et. Aute cillum laboris ad tempor 
amet officia <br>dolore consectetur qui.

* Here's an unordered list item
* One more list item
* Yet another list item!

1. Here is the first list item
2. It's the second list item
3. The third and last list item!

This is a simple paragraph, and [this is a link!](#!MarkdownBlock-Link)

\`\`\`javascript
// This is a codeblock
var x = 'y',
	y = (z) => z.toString();
y(x+1);
\`\`\`

---`

export let MarkdownBlockExample3 = `let MarkdownDemo = \`${MarkdownDemo}\`;

<MarkdownBlock source={MarkdownDemo}>`

export default class MarkdownBlock extends Component {
	renderText(source="") {
		let md = new Remarkable({
			html: true,
			xhtmlOut:     false,
			breaks:       false,
			langPrefix:   'language-',
			linkify:      true, 
			linkTarget:   '',   
			typographer:  false,
			quotes: '“”‘’'}),
			renderString = '';
		if ( typeof source == 'object') {
			source.forEach( (el) => 
				renderString += md.render(el.toString())
			);
			return {
				__html: renderString
			}
		} else {
			return {
				__html: md.render(source.toString())
			}
		}
	}
	render() {
		return (
			<div className="markdown-block">
				<span dangerouslySetInnerHTML={this.renderText(this.props.children || this.props.source || `---\n**No children to render.**\n\n---`)}/>		
			</div>
		)
	}
}