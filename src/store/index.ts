import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export * as actionCreators from './actions/creators'
export * from './reducers'
export default store
