import { Link, useParams } from 'react-router-dom'
import { CollectionItem } from '../../models/collectionContent'
import { deleteItem, deleteNoteFromArtwork } from '../actions/collectionItems'
import { useAppDispatch } from '../hooks/hooks'
import { useState } from 'react'
import NewNoteForm from './NewNoteForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileCircleXmark,
  faTrash,
  faFile,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
type Props = CollectionItem

export default function ArtItem(art: Props) {
  const [showAddNote, setShowAddNote] = useState(false)
  const dispatch = useAppDispatch()
  const params = useParams()
  const Collectionid = Number(params.id)

  function handleDelete() {
    dispatch(deleteItem(Collectionid, art.artworkId))
  }

  function handleDeleteNote() {
    dispatch(deleteNoteFromArtwork(Collectionid, art.noteId))
  }

  return (
    <>
      <NewNoteForm
        onClose={() => setShowAddNote(false)}
        isOpen={showAddNote}
        collectionItem={art}
      />
      <div className="hover:duration-00 group m-3 h-fit w-fit flex-col rounded-md p-2 transition-transform ease-in-out hover:bg-my-gold">
        <img
          className="h-80 w-80 font-quicksand"
          src={art.artImageLink}
          alt={art.artTitle}
        />
        <p className="m-0 w-80 pt-1 font-medium group-hover:text-white">
          {art.artTitle}
        </p>
        <div className="flex w-full justify-between pb-2">
          <div className="flex">
            <button onClick={handleDelete}>
              {' '}
              <FontAwesomeIcon icon={faTrash} style={{ color: '#ffffff' }} />
            </button>
            <Link
              to={`/artworks/${art.artworkId}`}
              className="ml-2 hidden group-hover:block"
            >
              <FontAwesomeIcon icon={faEye} style={{ color: '#ffffff' }} />
            </Link>
          </div>

          <div className="flex pb-1">
            {art.note ? (
              <button
                onClick={handleDeleteNote}
                className="hidden group-hover:block"
              >
                <FontAwesomeIcon
                  icon={faFileCircleXmark}
                  style={{ color: '#ffffff' }}
                />
              </button>
            ) : (
              <button
                onClick={() => setShowAddNote(true)}
                className="mr-2 hidden group-hover:block"
              >
                <FontAwesomeIcon icon={faFile} style={{ color: '#ffffff' }} />
              </button>
            )}
          </div>
        </div>

        <div className="hidden border-t-2 pt-2 group-hover:block">
          {art.note && (
            <div className="">
              <p className="font-semibold text-white">My Note</p>
              <p className="font-light text-white">{art.note}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
