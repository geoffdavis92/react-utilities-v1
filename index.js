// Libraries
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
// Components
// Utilities
import ExternalLink from './utilities/ExternalLink'
import CodeBlock from './utilities/CodeBlock'
import ComponentList from './components/list'

class App extends Component {
	render() {
		return (
			<main>
				<h1>React Utilities</h1>
				<h4><small><em>Functions and components to 
				aid in app development.</em></small></h4>
				<hr/>
				<section id="intro">
					<article>
						<p>This collection is meant to bolster a 
						developer's codebase or aid in the 
						development of an app. Many parts
						can stand alone, but some are only
						usable with certain libraries; these
						components and functions will be
						indicated as such.</p>
						<p>This base is not a boilerplate but
						 allows a quick creation of a boilerplate
						 by providing common components and helpers
						 out&ndash;of&ndash;the&ndash;box.</p>
					</article>
					<article>
						<p>Maintained by {ExternalLink('https://geoffdavis.info','Geoff Davis')}.</p>
					</article>
				</section>
				<section id="getting-started">
					<article>
						<h4>Getting Started</h4>
						<p>In order to get started, simply clone this repo
						 into your development environment and copy the necessary 
						 components. These utilities assume users are using
						 ES6 <code>Class</code> to construct React components, as
						 components utilize the <code>import</code> and <code>export</code> keywords 
						 in module files.</p>
						 <p><code>react-utilities</code> parts are broken up into 3
						  main categories:</p>
						 <dl>
						 	<dt>Components</dt>
						 	<dd>Powerful, custom React components</dd>
						 	<dt>Utilities</dt>
						 	<dd>Simple, reuseable drop-in components</dd>
						 	<dt>Helpers</dt>
						 	<dd>Helper functions</dd>
						 </dl>
					</article>
					<article>
						<h5>Components</h5>
						<p>These are standard components that extend React's <code>Component</code>
						  module; they have custom props, methods, and structure. Components can be 
						  "extended" to allow further customization of the application. Here is a list
						  of available components:
						</p>
						<ul>
							{ComponentList.map((el,i) => <li>{el.title}</li>)}
						</ul>
					</article>
				</section>
			</main>
		)
	}
}

render(
	(
		<Router history={browserHistory} >
			<Route path="/" component={App}/>
		</Router>
	),
	document.querySelector('#app')
	);