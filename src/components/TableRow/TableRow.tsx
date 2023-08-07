import { NoteItem, HandleFunction } from "../../types/types";
import { BiArchiveIn, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/hooks";
import { editNote, removeNote } from "../../redux/notes/notesSlice";
import { truncateString } from "../../helpers/truncateString";
import { countCategory } from "../../helpers/countCategory";
import { getDate } from "../../helpers/getDate";

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
  };

  return (
    <tr className="border-b">
      {stats ? (
        <>
          <td className="py-2 px-3">{category}</td>
          <td className="py-2 px-3 text-center">
            {countCategory(notes, category, false)}
          </td>
          <td className="py-2 px-3 text-center">
            {countCategory(notes, category, true)}
          </td>
        </>
      ) : (
        <>
          <td className="py-2 px-3">{note.title}</td>
          <td className="py-2 px-3 text-center">{note.created}</td>
          <td className="py-2 px-3 text-center">{note.category}</td>
          <td className="py-2 px-3 text-center">
            {truncateString(note.content, 25)}
          </td>
          <td className="py-2 px-3 text-center">
            {getDate(note.content).join(", ")}
          </td>
          <td className="py-2 px-3">
            <div className="flex justify-end">
              <button
                type="button"
                className="hover:text-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300 me-2"
                name="edit"
                onClick={() => handleShow("edit", note)}
              >
                <BiEditAlt size={24} />
              </button>
              <button
                type="button"
                className="hover:text-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300 me-2"
                name="archive"
                onClick={handleClickArchived}
              >
                <BiArchiveIn size={24} />
              </button>
              <button
                type="button"
                className="hover:text-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300"
                name="remove"
                onClick={handleClickRemove}
              >
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
