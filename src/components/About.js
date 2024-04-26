import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';

const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
        a.update();
        //eslint-disable-next-line
    },[]);
    return (
        <div>
            This is about {a.state.Name} and he is in class {a.state.Class}
        </div>
    )
}
export default About