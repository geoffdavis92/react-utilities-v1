import React from 'react'

export default function ExternalLink (href,text) {
	return <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
}