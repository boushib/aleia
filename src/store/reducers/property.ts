import { Property } from '../../models'
import { FetchPropertiesAction } from '../actions'
import { FetchPropertiesAT } from '../actions/types'

type PropertyState = {
  isLoading: boolean
  error?: string
  properties: Array<Property>
}
const propertyInitialState: PropertyState = {
  isLoading: true,
  properties: [],
}

export const propertyReducer = (
  state: PropertyState = propertyInitialState,
  action: FetchPropertiesAction
): PropertyState => {
  switch (action.type) {
    case FetchPropertiesAT.PENDING:
      return { ...propertyInitialState }
    case FetchPropertiesAT.SUCCESS:
      return { isLoading: false, properties: action.payload }
    case FetchPropertiesAT.ERROR:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}
