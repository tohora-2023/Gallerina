import request from 'superagent'

import CollectionItems from '../../models/CollectionItems'
const rootUrl = '/api/v1'

export async function getAllCollectionItems(
  id: number
): Promise<CollectionItems[]> {
  const response = await request.get(rootUrl + `/profile/collections/${id}`)
  return response.body
}
