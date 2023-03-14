import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import db from '../../../services/firestore';
import { collection, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router-dom';

const MealComponent = (data: any) => {

    const [dropdownEnabled, setDropdownEnabled] = useState<boolean>(false);
    const [mealValue, setMealValue] = useState<any>({});
    const {label, value} = data.data;

    const navigate = useNavigate();
    const {state} = useLocation();
    const {date} = state;
    
    useEffect(() => {
        setMealValue(data.data)
    }, [data])
    
    const setMeal = async (payload: any) => {
        const docRef = doc(db, "plans", date);
        await setDoc(docRef, payload)
    }

    const handleClick = () => {
        setMeal(mealValue);
        navigate(`/date-selector/`)
    }

    return (
        <Container>
        <Header onClick={() => setDropdownEnabled(prevDropdownEnabled => !prevDropdownEnabled)}>
            <Title>
                {label}
            </Title>
            {/* <Subtitle>
                {date}
            </Subtitle> */}
        </Header>
        {dropdownEnabled &&
        <DropdownContainer>
        <Button onClick={handleClick}>Add</Button>
        </DropdownContainer>
        }
    </Container>
    )
}

export default MealComponent;

const Container = styled.div`
margin: 10px;
background-color: #D9C5B2;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`
const Header = styled.div`
padding: 1px 15px 1px 15px;
background-color: #523D28;`
const Text = styled.p`
margin: 0px 10px 0px 0px;`;
const Title = styled.h3`
padding: 0px;
color: white`
const Subtitle = styled.h4`
padding: 0px;
color: #AAA49D`
const Input = styled.input`
height: 20px;`;
const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 10px 0px 10px 0px;`
const DropdownContainer = styled.div`
display: flex;
padding: 20px 20px 20px 20px;
flex-direction: column;`
const Button = styled.button`
`;