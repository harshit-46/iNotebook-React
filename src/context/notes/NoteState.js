import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "Name" : "Harshit",
        "Class" : "Btech"
    };
    const[state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "Name" : "Harsh",
                "Class" : "SDE"
            });
        },5000);
    };
    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;