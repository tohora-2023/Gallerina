import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchArtworkImage } from '../actions/homepage'
import { ArtworkApi } from '../../models/externalArtwork'
import LoadingSpinner from './LoadingSpinner'
import Dropdown from './HomeDropdown'
import { CollectionDB } from '../../models/collectionArtwork'
import { getAllCollectionsApi } from '../apis/homepage'

export default function Home() {
  const { loading, data, error } = useAppSelector((state) => state.artworkState)
  const [collections, setCollections] = useState<CollectionDB[]>([])
  const { user } = useAuth0()
  const { getAccessTokenSilently } = useAuth0()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArtworkImage())
  }, [dispatch])

  useEffect(() => {
    const getAccess = async () => {
      const token = await getAccessTokenSilently()
      if (user) {
        getAllCollectionsApi(token)
          .then((collections: CollectionDB[]) => {
            setCollections(collections)
          })
          .catch((error: Error) => {
            console.log(error)
          })
      }
    }
    getAccess().catch(console.error)
  }, [user, getAccessTokenSilently])

  return (
    <>
      <div className="min-h-screen">
        {error && <p>{error}</p>}
        {loading && <LoadingSpinner />}
        <div className="columns-4 gap-x-12 space-y-12 2xl:columns-5">
          {data?.map((artwork: ArtworkApi) => {
            return (
              <div key={artwork.id}>
                <div className="relative break-inside-avoid-column">
                  <Link to={`/artworks/${artwork.id}`}>
                    <img
                      className="h-auto w-full rounded-md opacity-100 hover:opacity-80"
                      src={artwork._links?.thumbnail?.href}
                      alt={artwork.slug}
                    />
                  </Link>
                  <div className="text-center font-garamond text-sm font-bold text-black">
                    <Dropdown
                      artwork={artwork}
                      artworkId={artwork.id}
                      coverImg={artwork._links?.thumbnail?.href}
                      collections={collections}
                      setCollections={setCollections}
                    />
                    <Link to={`/artworks/${artwork.id}`}>{artwork.title}</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
