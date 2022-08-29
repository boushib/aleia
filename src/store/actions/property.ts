import { FetchPropertiesAT } from './types'
import { Property } from '../../models'

type FetchPropertiesPendingAction = {
  type: FetchPropertiesAT.PENDING
}
type FetchPropertiesSuccessAction = {
  type: FetchPropertiesAT.SUCCESS
  payload: Array<Property>
}
type FetchPropertiesErrorAction = {
  type: FetchPropertiesAT.ERROR
  payload: string
}

export type FetchPropertiesAction =
  | FetchPropertiesPendingAction
  | FetchPropertiesSuccessAction
  | FetchPropertiesErrorAction
