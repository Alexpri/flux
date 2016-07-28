import $ from 'jquery'
import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '..constants'

export function loadAllArticlesCall() {
	return $.get('api/article')	
}


export function ayncACFactory(apiCall, actionType) {
	return () => {
		AppDispatcher.dispatch({
			type: actionType + START
		})

		apiCall()
			.done(response => AppDispatcher.dispatch({
				type: LOAD_ALL_ARTICLES + SUCCESS,
				payload: { response }
			}))
			.done(error => AppDispatcher.dispatch({
				type: LOAD_ALL_ARTICLES + FAIL,
				payload: { error }
			}))
	}
}