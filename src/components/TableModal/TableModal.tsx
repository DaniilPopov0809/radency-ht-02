import { Modal} from 'react-bootstrap';
import { HandleFunction, ModalType, NoteItem } from '../../types/types';
import NotesForm from '../NotesForm/NotesForm';

const TableModal = ({show, handleClose, modalType, initialNote}:{show:boolean, handleClose:HandleFunction, modalType:ModalType, initialNote:NoteItem|null}) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === "add"? 'Add note' : "Edit note"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <NotesForm modalType={modalType} initialNote={initialNote} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TableModal;