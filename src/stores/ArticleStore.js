import BasicStore from './BasicStore'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'

class ArticleStore extends BasicStore {
	
	constructor(...args) {
		super(...args)
		this.error = []

		this._registerActionSubscription((action) => {
			const { type, payload } = action

			switch (type) {
				case DELETE_ARTICLE:
					this._delete(payload.id)
					break

				case LOAD_ALL_ARTICLES + START:
					this.loading = true

				case LOAD_ALL_ARTICLES + SUCCESS:
					payload.response.forEach(this._add)
					this.loading = false
					break

				case LOAD_ALL_ARTICLES + FAIL:
					this.error.push(payload.error)
					this.emitChange()
					break

				default return
			}

			this.emitChange()
		})
	}
}

export default ArticleStore