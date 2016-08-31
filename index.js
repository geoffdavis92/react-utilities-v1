// Libraries
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
// Components
import ComponentList from './components/list'
import MarkdownBlock, { MarkdownBlockDetails, MarkdownBlockExample1, MarkdownBlockExample2, MarkdownBlockExample3, MarkdownDemo } from './components/MarkdownBlock'
// Utilities
import UtilityList from './utilities/list'
import Article, { ArticleDetails, ArticleExample1 } from './utilities/Article'
import ExternalLink from './utilities/ExternalLink'
import CodeBlock from './utilities/CodeBlock'

class App extends Component {
	render() {
		return (
			<main>
				<h1 className="blue-text">React Utilities</h1>
				<h4><small><em>Functions and components to 
				aid in app development.</em></small></h4>
				<hr className="heavy" />
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
				<br/>
				<hr className="heavy" />
				<section id="getting-started">
					<article>
						<h4 className="blue-text text-darken-4">Getting Started</h4>
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
				</section>
				<br/>
				<hr className="heavy" />
				<section id="components">
					<article id="comp-intro">
						<h4 className="blue-text text-darken-4">Components</h4>
						<p>These are standard components that extend React's <code>Component</code> module; 
						  they have custom props, methods, and structure. Components can be 
						  "extended" to allow further customization of the application. Here is a list
						  of available components:
						</p>
						<ul>
							{ComponentList.map((el,i) =>
								(
									<li key={i}>
										<strong>{el.title}</strong>{el.type ? ` (${el.type})` : ''}{el.intro ? ' – ' : ''}
										{el.intro}
										<ul>
											{el.deps.map((dep,i2) => (
												<li key={i2}>
													<strong>{dep.name}</strong>{dep.intro ? ' – ' : ''}
													{dep.intro}
												</li>
											))}
										</ul>
									</li>
								)
							)}
						</ul>
					</article>
					<Article id="comp-markdownblock" title="MarkdownBlock" component={MarkdownBlockDetails}>
						<p><code>MarkdownBlock</code> is used to render text written in the {ExternalLink('https://daringfireball.net/projects/markdown/','Markdown')} syntax. 
						This component is very useful for creating post-content-blocks for blog posts, or taking any Markdown file and injecting it into your app.
						It can be used either of two ways: using the <code>source</code> prop, 
						or by using the <code>this.props.children</code> array.</p>
						<p>The <code>source</code> prop technique requires that you set that prop equal to a string; this can be a single line passed in directly on
						 the component call, a variable equal to a string or strigified <code>.md</code> file.</p>
						{CodeBlock(MarkdownBlockExample1,`Using 'source' prop`)}
						<p>Using the <code>this.props.children</code> technique allows you to place all Markdown text as normal children, but you have to 
						format them a certain way. In order for this to work, you must wrap your individual Markdown elements with a pair of braces and backticks, such as 
						<code>{`{\`your text here\`}`}</code>.</p>
						{CodeBlock(MarkdownBlockExample2,`Using 'this.props.children'`)}
						<p><strong>Example:</strong></p>
						<MarkdownBlock source={MarkdownDemo}/>
						<p>The code that was used to render that block looks like this:</p>
						{CodeBlock(MarkdownBlockExample3,`MarkdownBlock Demo`)}
					</Article>
				</section>
				<br/>
				<hr className="heavy" />
				<section id="utilities">
					<article id="util-intro">
						<h4 className="blue-text text-darken-4">Utilities</h4>
						<p>These are component classes and stateless functions that are basic and meant to be 
						 highly reusable with little to no configuration. Here is a list
						  of available utilities:
						</p>
						<ul>
							{UtilityList.map((el,i) =>
								(
									<li key={i}>
										<strong>{el.title}</strong>{el.type ? ` (${el.type})` : ''}{el.intro ? ' – ' : ''}
										{el.intro}
										{/*<ul>
											{el.deps.map((dep,i2) => (
												<li key={i2}>
													<strong>{dep.name}</strong>{dep.intro ? ' – ' : ''}
													{dep.intro}
												</li>
											))}
										</ul>*/}
									</li>
								)
							)}
						</ul>
					</article>
					<Article id="util-article" title="Article" component={ArticleDetails}>
						<p><code>Article</code></p>
						{CodeBlock(ArticleExample1,`Composing an Article`)}
					</Article>
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