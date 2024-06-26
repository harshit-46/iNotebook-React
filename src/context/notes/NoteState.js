import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "662d5b7c20ddf0e47cf82b4ee0",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-27T20:09:32.148Z",
            "__v": 0
        },
        {
            "_id": "662d5b8720d0e47sdfcf82b4ee4",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 2",
            "description": "Please wake up early 2",
            "tag": "personal",
            "date": "2024-04-27T20:09:43.232Z",
            "__v": 0
        },
        {
            "_id": "662d5b9220d0e4rre7cf82b4ee6",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 3",
            "description": "Please wake up early 3",
            "tag": "personal",
            "date": "2024-04-27T20:09:54.923Z",
            "__v": 0
        },
        {
            "_id": "662d5b7c20d0ebfd47cf82b4ee0",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-27T20:09:32.148Z",
            "__v": 0
        },
        {
            "_id": "662d5b8720d0e47cf8kyu2b4ee4",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 2",
            "description": "Please wake up early 2",
            "tag": "personal",
            "date": "2024-04-27T20:09:43.232Z",
            "__v": 0
        },
        {
            "_id": "662d5b9220d0e47cretf82b4ee6",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 3",
            "description": "Please wake up early 3",
            "tag": "personal",
            "date": "2024-04-27T20:09:54.923Z",
            "__v": 0
        }];
    const [notes, setNotes] = useState(notesInitial);

    //Add a note:
    const addNote = (title, description, tag) => {
        const note = {
            "_id": "662d5b9220d0e47cretf82b4ee6",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 3 Added",
            "tag": "personal",
            "date": "2024-04-27T20:09:54.923Z",
            "__v": 0
        };
        setNotes(notes.push(note));
    }

    // Edit a note:
    const editNote = (id) => {

    };
    //Delete a note:
    const deleteNote = (id) => {

    };


    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;