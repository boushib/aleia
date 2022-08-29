import { Dispatch } from 'redux'
import { FetchPropertiesAction } from '../'
import api from '../../../api'
import { FetchPropertiesAT } from '../types'

export const fetchProperties = () => {
  return async (dispatch: Dispatch<FetchPropertiesAction>) => {
    dispatch({ type: FetchPropertiesAT.PENDING })
    try {
      const { data } = await api.get('/data/properties.json')
      dispatch({ type: FetchPropertiesAT.SUCCESS, payload: data })
    } catch (error: any) {
      dispatch({ type: FetchPropertiesAT.ERROR, payload: error.message })
    }
  }
}
