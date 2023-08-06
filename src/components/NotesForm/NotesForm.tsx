import { Button, Form } from "react-bootstrap";
import { useAppSelector } from "../../hooks/hooks";
import { selectCategoties } from "../../redux/notes/notesSelectors";
import { ModalType } from "../../types/types";

const NotesForm = ({ modalType }: { modalType: ModalType }) => {
  const categories = useAppSelector(selectCategoties);
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Note title</Form.Label>
        <Form.Control type="email" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select category</option>
          {categories.map((category) => (
            <option value={category} key={category}>{category}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter content"
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {modalType === "add" ? "Add note" : "Save note"}
      </Button>
    </Form>
  );
};

export default NotesForm;
