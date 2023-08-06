import { Modal} from 'react-bootstrap';
import { HandleFunction, ModalType } from '../../types/types';
import NotesForm from '../NotesForm/NotesForm';

const TableModal = ({show, handleClose, modalType}:{show:boolean, handleClose:HandleFunction, modalType:ModalType}) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === "add"? 'Add note' : "Edit note"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <NotesForm modalType={modalType}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TableModal;