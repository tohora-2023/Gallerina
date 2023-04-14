import { combineReducers } from 'redux'

import art from './homepage'
import collectionsReducer from './collection'
import collectionItemsReducer from './collection-items'

export default combineReducers({
  artworkState: art,
  collectionState: collectionsReducer,
  collectionItemsState: collectionItemsReducer,
})
