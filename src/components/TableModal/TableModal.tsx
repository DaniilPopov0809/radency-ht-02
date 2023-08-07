import { HandleFunction, ModalType, NoteItem } from "../../types/types";
import NotesForm from "../NotesForm/NotesForm";
import { AiOutlineClose } from "react-icons/ai";

const TableModal = ({
  show,
  handleClose,
  modalType,
  initialNote,
}: {
  show: boolean;
  handleClose: HandleFunction;
  modalType: ModalType;
  initialNote: NoteItem | null;
}) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        show ? "visible" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={handleBackdropClick}
      ></div>
      <div className="z-10 bg-stone-50 p-4 rounded-lg shadow-md w-96">
        <div className="flex justify-between mb-4 border-b pb-4">
          <h2 className="text-2xl font-semibold">
            {modalType === "add" ? "Add note" : "Edit note"}
          </h2>
          <button
            className="hover:text-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300"
            onClick={() => handleClose()}
          >
            <AiOutlineClose size={16} />
          </button>
        </div>
        <div>
          <NotesForm
            modalType={modalType}
            initialNote={initialNote}
            handleClose={handleClose}
            isModalOpen={show}
          />
        </div>
      </div>
    </div>
  );
};

export default TableModal;
