import React from 'react';
import { useContext } from 'react';
import noteContext from "../context/notes/NoteContext";
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <div className="row md-3">
            <h1>Your Notes</h1>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note}/>
            })};
        </div>
    )
}

export default Notes
