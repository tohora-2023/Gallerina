import type { ThunkAction } from '../store'
import TCollection from '../../models/collection'
import { AddCollection } from '../../models/collection'
import { getCollections, addCollection } from '../apis/collection'

// FETCH Collections
export const FETCH_COLLECTIONS_PENDING = 'FETCH_COLLECTIONS_PENDING'
export const FETCH_COLLECTIONS_FULFILLED = 'FETCH_COLLECTIONS_FULFILLED'
export const FETCH_COLLECTIONS_REJECTED = 'FETCH_COLLECTIONS_REJECTED'

// ADD Collection
export const ADD_COLLECTION_PENDING = 'ADD_COLLECTION_PENDING'
export const ADD_COLLECTION_FULFILLED = 'ADD_COLLECTION_FULFILLED'
export const ADD_COLLECTION_REJECTED = 'ADD_COLLECTION_REJECTED'

// DELETE Collection
// export const DELETE_COLLECTION_PENDING = 'DELETE_COLLECTION_PENDING'
// export const DELETE_COLLECTION_FULFILLED = 'DELETE_COLLECTION_FULFILLED'
// export const DELETE_COLLECTION_REJECTED = 'DELETE_COLLECTION_REJECTED'

// UPDATE Collection
// export const UPDATE_COLLECTION_PENDING = 'UPDATE_COLLECTION_PENDING'
// export const UPDATE_COLLECTION_FULFILLED = 'UPDATE_COLLECTION_FULFILLED'
// export const UPDATE_COLLECTION_REJECTED = 'UPDATE_COLLECTION_REJECTED'

export type CollectionAction =
  // FETCH Collection
  | {
      type: typeof FETCH_COLLECTIONS_PENDING
      payload: void
    }
  | {
      type: typeof FETCH_COLLECTIONS_FULFILLED
      payload: TCollection[]
    }
  | {
      type: typeof FETCH_COLLECTIONS_REJECTED
      payload: string
    }
  // ADD Collection
  | {
      type: typeof ADD_COLLECTION_PENDING
      payload: void
    }
  | {
      type: typeof ADD_COLLECTION_FULFILLED
      payload: AddCollection
    }
  | {
      type: typeof ADD_COLLECTION_REJECTED
      payload: string
    }

// FETCH Collection
export function fetchCollectionsPending(): CollectionAction {
  return {
    type: FETCH_COLLECTIONS_PENDING,
  } as CollectionAction
}

export function fetchCollectionsFullfilied(
  collections: TCollection[]
): CollectionAction {
  return {
    type: FETCH_COLLECTIONS_FULFILLED,
    payload: collections,
  }
}

export function fetchCollectionsRejected(errMessage: string): CollectionAction {
  return {
    type: FETCH_COLLECTIONS_REJECTED,
    payload: errMessage,
  }
}

export function fetchCollections(): ThunkAction {
  return (dispatch) => {
    dispatch(fetchCollectionsPending())
    return getCollections()
      .then((collections) => {
        dispatch(fetchCollectionsFullfilied(collections))
      })
      .catch((err) => {
        dispatch(fetchCollectionsRejected(err.message))
      })
  }
}
