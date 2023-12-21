import * as React from "react";
import { Note } from "../models/note.model";
import { Button, Card } from "react-bootstrap";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({ note,handleDelete }) => {
  return (
    <>
      <Card className="p-3" style={{backgroundColor: note.color}}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle>{note.date}</Card.Subtitle>
          <Button
            variant="danger"
            className="mt-3"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Notes;
