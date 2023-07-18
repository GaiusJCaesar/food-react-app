import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {db} from '../../services/firestore';
import { collection, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddMeals = () => {
    const [mealValue, setMealValue] = useState<any>({})

    const mealTemplate = {value: '', label: ''}

    const navigate = useNavigate();
    
    useEffect(() => {
        setMealValue(mealTemplate)
    }, [])
    

    const setMeal = async (value: any, payload: any) => {
        const docRef = doc(db, "meals", value);
        await setDoc(docRef, payload)
    }

    const handleChange = (updatedValue: any, key: string) => {
        if (key==='label') {
            const {value} = updatedValue.target;
            const updatedMeal = mealValue;
            updatedMeal.label = value
            setMealValue(updatedMeal);
        }
        if (key==='value') {
            const {value} = updatedValue.target;
            const updatedMeal = mealValue;
            updatedMeal.value = value
            setMealValue(updatedMeal);
            }
    }

    const handleClick = () => {
        setMeal(mealValue.value, mealValue);
        navigate(`/meals`)
    } 

    return (
        <>
        <Title>Add Meals</Title>
        <Container>
            <Row>
                <Text>Value: </Text>
                <Input onChange={newVal => {handleChange(newVal, 'value')}} />
            </Row>
            <Row>
                <Text>Label: </Text>
                <Input onChange={newVal => {handleChange(newVal, 'label')}} />
            </Row>
            <Button onClick={handleClick}>Save</Button>
        </Container>
        </>
    )
}

export default AddMeals;

const Text = styled.p`
margin: 0px 10px 0px 0px;`;
const Input = styled.input`
height: 20px;`;
const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 10px 0px 10px 0px;`
const Button = styled.button`
width: 10%;
`;
const Container = styled.div`
background-color: #D9C5B2;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
padding: 20px;
`
const Title = styled.h1`
display: flex;
justify-content: center;`