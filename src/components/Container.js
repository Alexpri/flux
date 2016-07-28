import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './ArticleList'
import { loadAllArticles } from '../AC/articles'

class Container extends Component {
	static PropTypes = {

	}

	constructor() {
		super()
		this.state = {
			articles: articleStore.getAll()
		}
	}

	componentDidMount() {
		articleStore.addChangeListener(this.handleChange)
		if (!this.state.articles.length) loadAllArticles()
	}

	componentWillMount() {
		articleStore.removeChangeListener(this.handleChange)
	}

	handleChange = () => {
		this.setState({
			articles: articleStore.getAll()
			loading: articleStore.loading
		})
	}

	render() {
		if(this.state.loading) return <h1>Loading, please wait...</h1>
		return <ArticleList articles = {this.state.articles} />
	}
}

export default Container