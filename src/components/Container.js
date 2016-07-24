import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './ArticleList'

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
	}

	componentWillMount() {
		articleStore.removeChangeListener(this.handleChange)
	}

	handleChange = () => {
		this.setState({
			articles: articleStore.getAll()
		})
	}

	render() {
		return <ArticleList articles = {this.state.articles} />
	}
}

export default Container