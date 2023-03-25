import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NoteType } from '../Notes';
import { MdDeleteForever } from 'react-icons/md'

interface NoteProps {
    handleDeleteNote: (text: string) => void;
    id: string;
    text: string;
    date: string;
}
const Note = ({ handleDeleteNote, id, text, date}: NoteProps) => {
    
    // const text = 'title'
    return (
        <NoteContainer>
            <Text>{text}</Text>
            <BottomContainer>
                <Date>{date}</Date>
                <DeleteIcon size={'1.3em'} onClick={() => handleDeleteNote(id)} />
            </BottomContainer>
        </NoteContainer>
    )
}

export default Note;

const NoteContainer = styled.div`
padding: 1rem;
background-color: #fef68a;
margin: 10px 10px;
border-radius: 10px;
min-height: 100px;
display: flex;
justify-content: space-between;
flex-direction: column;
`

const BottomContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;

`;

const Title = styled.h3`
display: flex;
`

const Text = styled.p`
display: flex;
`

const Date = styled.small``

const DeleteIcon = styled(MdDeleteForever)`
    cursor: pointer;
    &:hover{
        background-color: #ededed;
        cursor: pointer;
    }

`