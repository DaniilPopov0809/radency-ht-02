import {useEffect, useState} from 'react';
import {Table, Button} from 'react-bootstrap';
import TableRow from '../TableRow/TableRow';
import TableModal from '../TableModal/TableModal';
import { useAppSelector } from '../../hooks/hooks';
import { selectNotes, selectCategoties } from '../../redux/notes/notesSelectors';
import { NoteItem, HandleFunction, ModalType } from '../../types/types';

const NotesTable = ({stats}:{stats:boolean}) => {

  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("add");

  const handleClose: HandleFunction = () => setShow(false);
  const handleShow: HandleFunction = (type?: ModalType) => {
    setShow(true);
    if (type) {
      setModalType(type);
    }
  };

  const notes: NoteItem[] = useAppSelector(selectNotes);
  const categories: string[] = useAppSelector(selectCategoties)

  const plug = {
    id: "",
    created: "",
    title: "",
    category: "",
    content: "",
    archive: false,
  }

  useEffect(() => {}, [notes]);  

  return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr className="table-primary">
        {stats ? (
          <>
            <th scope="col">Name</th>
            <th scope="col">Active</th>
            <th scope="col">Archived</th>
          </>
        ) : (
          <>
            <th scope="col">Name</th>
            <th scope="col">Created</th>
            <th scope="col">Category</th>
            <th scope="col">Content</th>
            <th scope="col">Dates</th>
            <th scope="col">Functions</th>
          </>
        )}
      </tr>
    </thead>
    <tbody>
      {stats
        ? categories.map((category) => (
            <TableRow  note ={plug} notes ={notes} stats={stats} category={category} key={category} handleShow={handleShow}/>
          ))
        : notes.map((note) => (
            <TableRow  note ={note} notes ={[]} stats={stats} category={''} key={note.id} handleShow={handleShow}/>
          ))}
    </tbody>
  </Table>
  {!stats && <Button className='mb-3' onClick={() => handleShow('add')}>Create Note</Button>}
  <TableModal show={show} handleClose={handleClose} modalType={modalType}/>
  </>
  );
}

export default NotesTable;