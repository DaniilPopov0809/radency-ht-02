import { NoteItem, HandleFunction } from "../../types/types";
import { BiArchiveIn, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/hooks";
import { editNote, removeNote } from "../../redux/notes/notesSlice";
import { truncateString } from "../../helpers/truncateString";
import { countCategory } from "../../helpers/countCategory";

const TableRow = ({
  note,
  notes,
  stats,
  category,
  handleShow,
}: {
  note: NoteItem;
  notes: NoteItem[];
  stats: boolean;
  category: string;
  handleShow: HandleFunction;
}) => {

  const dispatch = useAppDispatch();

  const handleClickArchived = () => {
    const updateNote = { ...note, archive: !note.archive };
    dispatch(editNote(updateNote));
  };

  const handleClickRemove = () => {
    dispatch(removeNote(note));
  }

  return (
    <tr className="table-light">
      {stats ? (
        <>
          <td>{category}</td>
          <td>{countCategory(notes, category, false)}</td>
          <td>{countCategory(notes, category, true)}</td>
        </>
      ) : (
        <>
          <td>{note.title}</td>
          <td>{note.created}</td>
          <td>{note.category}</td>
          <td>{truncateString(note.content, 25)}</td>
          <td></td>
          <td>
            <div>
              <button
                type="button"
                className="btn btn-primary me-2"
                name="edit"
                onClick={() => handleShow("edit", note)}
              >
                <BiEditAlt size={24} />
              </button>
              <button
                type="button"
                className="btn btn-primary me-2"
                name="archive"
                onClick={handleClickArchived}
              >
                <BiArchiveIn size={24} />
              </button>
              <button type="button" className="btn btn-primary" name="remove" onClick={handleClickRemove}>
                <AiOutlineDelete size={24} />
              </button>
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
