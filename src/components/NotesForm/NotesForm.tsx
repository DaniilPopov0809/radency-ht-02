import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { nanoid } from "nanoid";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { selectCategoties } from "../../redux/notes/notesSelectors";
import { addNote, editNote } from "../../redux/notes/notesSlice";
import { ModalType, NoteItem, HandleFunction } from "../../types/types";
import { getCurrentDate } from "../../helpers/getCurrentDate";

const NotesForm = ({
  modalType,
  initialNote,
  handleClose,
}: {
  modalType: ModalType;
  initialNote: NoteItem | null;
  handleClose: HandleFunction;
}) => {
  const categories = useAppSelector(selectCategoties);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (modalType === "edit" && initialNote) {
      setTitle(initialNote.title);
      setCategory(initialNote.category);
      setContent(initialNote.content);
    }
  }, [modalType, initialNote]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      default:
        return;
    }
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
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Note title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Enter content"
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!title || !category}>
        {modalType === "add" ? "Add note" : "Save note"}
      </Button>
    </Form>
  );
};

export default NotesForm;
