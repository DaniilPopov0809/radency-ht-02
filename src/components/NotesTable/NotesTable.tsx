import { useEffect, useState } from "react";
import { BiArchiveIn } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
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
        <h1 className="text-center mb-3 font-medium text-3xl">
          {archived ? "Archived notes" : "Active notes"}
        </h1>
      )}
      <table className="border-solid rounded-t-lg mx-auto overflow-hidden max-w-full mb-4">
        <thead className="bg-violet-300 shadow-md">
          <tr className="text-white ">
            {stats ? (
              <>
                <th scope="col" className="py-2 px-3">
                  Name
                </th>
                <th scope="col" className="py-2 px-3">
                  Active
                </th>
                <th scope="col" className="py-2 px-3">
                  Archived
                </th>
              </>
            ) : (
              <>
                <th scope="col" className="py-2 px-3">
                  Name
                </th>
                <th scope="col" className="py-2 px-3">
                  Created
                </th>
                <th scope="col" className="py-2 px-3">
                  Category
                </th>
                <th scope="col" className="py-2 px-3">
                  Content
                </th>
                <th scope="col" className="py-2 px-3">
                  Dates
                </th>
                <th scope="col" className="py-2 px-3 flex justify-end">
                  <BiArchiveIn size={24} className="me-2" />
                  <AiOutlineDelete size={24} />
                </th>
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
      </table>
      {activeNotes.length === 0 && !archived && !stats && (
        <p className="text-center border-b mb-4">No notes available.</p>
      )}
      {archivedNotes.length === 0 && archived && !stats && (
        <p className="text-center border-b mb-4">No notes available.</p>
      )}
      <div className="mb-4">
        {!stats && (
          <button
            className="text-white bg-violet-300 shadow-md px-3 py-2 rounded-full me-2 hover:bg-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-600 focus-visible:rounded-full duration-300 me-2 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handleShow("add")}
            disabled={archived === true}
          >
            Create Note
          </button>
        )}
        {!stats && (
          <button
            className="text-white bg-violet-300 shadow-md px-3 py-2 rounded-full me-2 hover:bg-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-600 focus-visible:rounded-full duration-300 me-2"
            onClick={() => setArchived(true)}
          >
            Archived Notes
          </button>
        )}
        {!stats && (
          <button
            className="text-white bg-violet-300 shadow-md px-3 py-2 rounded-full me-2 hover:bg-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-600 focus-visible:rounded-full duration-300"
            onClick={() => setArchived(false)}
          >
            Active Notes
          </button>
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
