import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "662d5b7c20d0e47cf82b4ee0",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-27T20:09:32.148Z",
            "__v": 0
        },
        {
            "_id": "662d5b8720d0e47cf82b4ee4",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 2",
            "description": "Please wake up early 2",
            "tag": "personal",
            "date": "2024-04-27T20:09:43.232Z",
            "__v": 0
        },
        {
            "_id": "662d5b9220d0e47cf82b4ee6",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 3",
            "description": "Please wake up early 3",
            "tag": "personal",
            "date": "2024-04-27T20:09:54.923Z",
            "__v": 0
        },
        {
            "_id": "662d5b7c20d0e47cf82b4ee0",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-04-27T20:09:32.148Z",
            "__v": 0
        },
        {
            "_id": "662d5b8720d0e47cf82b4ee4",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 2",
            "description": "Please wake up early 2",
            "tag": "personal",
            "date": "2024-04-27T20:09:43.232Z",
            "__v": 0
        },
        {
            "_id": "662d5b9220d0e47cf82b4ee6",
            "user": "662d5b1b20d0e47cf82b4edd",
            "title": "My title 3",
            "description": "Please wake up early 3",
            "tag": "personal",
            "date": "2024-04-27T20:09:54.923Z",
            "__v": 0
        }];
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;