import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DateToNiceString } from '../../functions/functions';
import AddNote from './components/AddNote';
import Note from './components/Note';
import {db} from '../../services/firestore';
import { collection, onSnapshot, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';


export type NoteType = {
        id: string;
        text: string;
        date: string;
    }

const Notes = () => {

    const [notes, setNotes] = useState<any[]>([]);

    useEffect(() => {
        onSnapshot(collection(db, "notes"), (snapshot) => {
          setNotes(snapshot.docs.map(doc => doc.data()))        
        });
      }, [])

    const addNote = async (text: string) => {
        const newDate = new Date()
        const date = DateToNiceString(newDate.toDateString());
        const newNote = {
            id: nanoid(),
            text: text,
            date: date,
        }
        const docRef = doc(db, "notes", newNote.id);
        await setDoc(docRef, newNote)
    }

    const deleteNote = async (id: string) => {
        await deleteDoc(doc(db, "notes", id))
    }

    return (
        <>
            <Title>Notes</Title>
            <NotesList>
                {notes.map((note) => <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={deleteNote} />)}
                <AddNote handleAddNote={addNote} />
            </NotesList>
        </>
    )
}

export default Notes;

const Title = styled.h1`
display: flex;
justify-content: center;`

const NotesList = styled.div`
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
`;