import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import deleteArticle from '../AC/articles'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const { isOpen, openArticle, article: { title, text, comments } } = this.props
            const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null

            return (
                <div>
                    <h1 onClick = {openArticle}>{ title } <a href="#" onClick={this.handleDelete}>Delete me</a></h1>
                    {body}
                </div>
            )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }
}

export default Article