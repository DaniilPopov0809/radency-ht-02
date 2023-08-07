import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { selectCategoties } from "../../redux/notes/notesSelectors";
import { addNote, editNote } from "../../redux/notes/notesSlice";
import { ModalTypes, NoteItem, HandleFunction } from "../../types/types";
import { getCurrentDate } from "../../helpers/getCurrentDate";

const NotesForm = ({
  modalType,
  initialNote,
  handleClose,
  isModalOpen,
}: {
  modalType: ModalTypes;
  initialNote: NoteItem | null;
  handleClose: HandleFunction;
  isModalOpen: boolean;
}) => {
  const categories = useAppSelector(selectCategoties);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (modalType === ModalTypes.Edit && initialNote) {
      setTitle(initialNote.title);
      setCategory(initialNote.category);
      setContent(initialNote.content);
    }
  }, [modalType, initialNote]);

  useEffect(() => {
    if (!isModalOpen) {
      resetTableFields();
    }
  }, [isModalOpen]);

  const resetTableFields = (): void => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (modalType === "add") {
      const data: NoteItem = {
        id: nanoid(),
        created: getCurrentDate(),
        title: title,
        category: category,
        content: content,
        archive: false,
      };
      dispatch(addNote(data));
    }
    if (modalType === "edit" && initialNote) {
      const data: NoteItem = { ...initialNote, title, category, content };
      dispatch(editNote(data));
    }
    resetTableFields();
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <div className="mb-3 text-start flex flex-col">
        <label htmlFor="title" className="mb-2 font-semibold">
          Note title
        </label>
        <input
          type="text"
          name="title"
          className="px-3 py-2 border rounded-lg hover:border-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300"
          placeholder="Enter title"
          value={title}
          required
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-3 text-start flex flex-col">
        <label htmlFor="category" className="mb-2 font-semibold">
          Category
        </label>
        <select
          name="category"
          required
          className="px-3 py-2 border rounded-lg hover:border-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3 text-start flex flex-col">
        <label htmlFor="content" className="mb-2 font-semibold">
          Content
        </label>
        <textarea
          name="content"
          className="px-3 py-2 border rounded-lg hover:border-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300 resize-none"
          value={content}
          onChange={handleContentChange}
          placeholder="Enter content"
          rows={5}
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-violet-300 shadow-md px-3 py-2 rounded-full me-2 hover:bg-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-600 focus-visible:rounded-full duration-300"
      >
        {modalType === "add" ? "Add note" : "Save note"}
      </button>
    </form>
  );
};

export default NotesForm;
