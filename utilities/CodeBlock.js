import React from 'react'

export default function CodeBlock (text,title="Code") {
	return <pre className="has-title" data-title={title}><code>{text}</code></pre>
}