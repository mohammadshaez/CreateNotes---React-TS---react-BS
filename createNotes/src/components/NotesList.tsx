import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";
import "../App.css";

interface INoteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList: React.FunctionComponent<INoteListProps> = ({ notes, setNotes }) => {
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  };
  return (
    <>
      <h2 className="margin-5">Notes</h2>
      {renderNotes()}
    </>
  );
};

export default NoteList;
