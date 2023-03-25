import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface AddNoteProps {
    handleAddNote: (text: string) => void
}

const AddNote = ({handleAddNote}: AddNoteProps) => {

    const [noteText, setNoteText] = useState('');

    const handleTextChange = (event: any) => {
        setNoteText(event.target.value);
    }

    const handleClick = () => {
        if (noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
    } 

    return (
        <NoteContainer>
            <Input onChange={handleTextChange} rows={3} cols={10} value={noteText} placeholder='Type to add a new note...'></Input>
            <NoteFooter>
                <Button onClick={handleClick}>Save</Button>
            </NoteFooter>
        </NoteContainer>
    )
}

export default AddNote;

const NoteContainer = styled.div`
padding: 1rem;
background-color: #67d7cc;
margin: 10px 10px;
border-radius: 10px;
min-height: 100px;
display: flex;
justify-content: space-between;
flex-direction: column;
`
const NoteFooter = styled.div`
display: flex;
justify-content: flex-end;
`;
interface InputProps {
}
const Input = styled.textarea<InputProps>`
border: none;
resize: none;
background-color: #67d7cc;
outline: none;
`;

const Button = styled.button`
background-color: #e1e1e1;
border: none;
border-radius: 15px;
padding: 5px 10px;
&:hover{
    background-color: #ededed;
    cursor: pointer;
}`;