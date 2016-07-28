import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'
import { loadAllArticlesCall, ayncACFactory } from './webUtils'
import $ from 'jquery'

 export function deleteArticle(id) {
	const action = {
		type: DELETE_ARTICLE,
		payload: {
			id
		}
	}

	AppDispatcher.dispatch(action)
}

export const loadAllArticles = ayncACFactory(loadAllArticlesCall, LOAD_ALL_ARTICLES)
