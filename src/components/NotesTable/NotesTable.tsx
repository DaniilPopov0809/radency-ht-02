import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import TableRow from "../TableRow/TableRow";
import TableModal from "../TableModal/TableModal";
import { useAppSelector } from "../../hooks/hooks";
import {
  selectNotes,
  selectCategoties,
} from "../../redux/notes/notesSelectors";
import { NoteItem, HandleFunction, ModalType } from "../../types/types";

const NotesTable = ({ stats }: { stats: boolean }) => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("add");
  const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);
  const [archived, setArchived] = useState<boolean>(false);

  const handleClose: HandleFunction = () => {
    setShow(false);
    setSelectedNote(null);
  };
  const handleShow: HandleFunction = (type, note) => {
    setShow(true);
    if (type) {
      setModalType(type);
    }
    if (note) {
      setSelectedNote(note);
    }
  };

  const notes: NoteItem[] = useAppSelector(selectNotes);
  const categories: string[] = useAppSelector(selectCategoties);

  const plug = {
    id: "",
    created: "",
    title: "",
    category: "",
    content: "",
    archive: false,
  };

  const archivedNotes: NoteItem[] = notes.filter((note) => note.archive);
  const activeNotes: NoteItem[] = notes.filter((note) => !note.archive);

  useEffect(() => {}, [notes]);

  return (
    <>
      {!stats && (
        <h1 className="text-center">{archived ? "Archive" : "ToDo List"}</h1>
      )}
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
                <TableRow
                  note={plug}
                  notes={notes}
                  stats={stats}
                  category={category}
                  key={category}
                  handleShow={handleShow}
                />
              ))
            : notes
                .filter((note) => note.archive === archived)
                .map((note) => (
                  <TableRow
                    note={note}
                    notes={notes}
                    stats={stats}
                    category={""}
                    key={note.id}
                    handleShow={handleShow}
                  />
                ))}
        </tbody>
      </Table>
      {activeNotes.length === 0 && !archived && !stats && (
        <p className="text-center">No notes available.</p>
      )}
      {archivedNotes.length === 0 && archived && !stats && (
        <p className="text-center">No notes available.</p>
      )}
      <div className="mb-3">
        {!stats && (
          <Button
            className="btn primary-btn me-2"
            onClick={() => handleShow("add")}
            disabled={archived === true}
          >
            Create Note
          </Button>
        )}
        {!stats && (
          <Button
            className="btn primary-btn me-2"
            onClick={() => setArchived(true)}
          >
            Archived Notes
          </Button>
        )}
        {!stats && (
          <Button
            className="btn primary-btn"
            onClick={() => setArchived(false)}
          >
            Active Notes
          </Button>
        )}
      </div>
      <TableModal
        show={show}
        handleClose={handleClose}
        modalType={modalType}
        initialNote={selectedNote}
      />
    </>
  );
};

export default NotesTable;
