import React from 'react'

export default function CodeBlock (text,title="Code") {
	return (
		<pre data-title={title}>
			<code>
				{text}
			</code>
		</pre>
	)
}