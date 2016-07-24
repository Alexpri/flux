import AppDispatcher from '../dispatcher'

 function deleteArticle(id) {
	const action = {
		type: 'DELETE_ARTICLE',
		payload: {
			id
		}
	}

	AppDispatcher.dispatch(action)
}

export default deleteArticle