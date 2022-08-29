import { combineReducers } from 'redux'
import { propertyReducer } from './property'

const rootReducer = combineReducers({
  properties: propertyReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
