import { Link, useParams } from 'react-router-dom'
import { CollectionItem } from '../../models/collectionContent'
import { deleteItem, deleteNoteFromArtwork } from '../actions/collectionItems'
import { useAppDispatch } from '../hooks/hooks'
import { useState } from 'react'
import NewNoteForm from './NewNoteForm'
import { deleteNote } from '../apis/collectionItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faNoteSticky, faTrash } from '@fortawesome/free-solid-svg-icons'
type Props = CollectionItem

export default function ArtItem(art: Props) {
  // CONDITIONAL FORM RENDER LOGIC
  const [showAddNote, setShowAddNote] = useState(false)

  const dispatch = useAppDispatch()
  const params = useParams()
  const Collectionid = Number(params.id)

  // COLLECTION ITEM
  function handleDelete() {
    dispatch(deleteItem(Collectionid, art.artworkId))
  }

  // NOTE
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
          className="h-80 w-auto font-quicksand"
          src={art.artImageLink}
          alt={art.artTitle}
        />
        <div className="flex content-center">
          <p className="m-0 mr-3 w-80 font-medium group-hover:text-white">
            {art.artTitle}
          </p>
          <Link
            to={`/artworks/${art.artworkId}`}
            className="hidden group-hover:block"
          >
            <FontAwesomeIcon icon={faEye} style={{ color: '#ffffff' }} />
          </Link>
        </div>
        <button onClick={handleDelete} className="flex-end">
          {' '}
          <FontAwesomeIcon icon={faTrash} style={{ color: '#ffffff' }} />
        </button>
        <div className="flex justify-between"></div>
        <div className="mt-3 hidden group-hover:block">
          <button onClick={() => setShowAddNote(true)}>
            <FontAwesomeIcon icon={faNoteSticky} style={{ color: '#ffffff' }} />
          </button>
          {art.noteName && (
            <div className="flex justify-between">
              <p className="mr-2 font-bold text-white">{art.noteName} </p>
              <p className="text-white">{art.note}</p>
              <button onClick={handleDeleteNote}>
                {/* <FontAwesomeIcon
                  icon={faMessageXmark}
                  style={{ color: '#ffffff' }}
                /> */}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
