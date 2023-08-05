import React, {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from '../TableRow/TableRow';
import { useAppSelector } from '../../hooks/hooks';
import { selectNotes, selectCategoties } from '../../redux/notes/notesSelectors';
import { NoteItem } from '../../types/types';

const NotesTable = ({stats}:{stats:boolean}) => {
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
            <TableRow  note ={plug} notes ={notes} stats={stats} category={category} key={category} />
          ))
        : notes.map((note) => (
            <TableRow  note ={note} notes ={[]} stats={stats} category={''} key={note.id}/>
          ))}
    </tbody>
  </Table>
  );
}

export default NotesTable;