import Meal from "../../components/Meal";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';
import db from '../../services/firestore';
import { collection, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { useLocation, useNavigate } from "react-router-dom";
import MealComponent from "./components/MealComponent";
import { DateToNiceString } from "../../functions/functions";

const MealSelector = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {date} = state;

    const [mealsAvailable, setMealsAvailable] = useState<any[] | undefined>([]) 
    const [dropdownEnabled, setDropdownEnabled] = useState<boolean>(false);

    useEffect(() => {
        onSnapshot(collection(db, "meals"), (snapshot) => {
          setMealsAvailable(snapshot.docs.map(doc => doc.data()))        
        });
    }, [])

    return (
        <div>
            <Title>Meals</Title>
            <Subtitle>{DateToNiceString(date)}</Subtitle>
            <Text>Select a meal, then press Add</Text>
            {mealsAvailable?.map(meal => (<MealComponent key={meal.value} data={meal ? meal : undefined} />))}
        </div>
    )
};

export default MealSelector;

const Title = styled.h1`
display: flex;
justify-content: center;`
const Subtitle = styled.h3`
display: flex;
justify-content: center;`
const Text = styled.p`
display: flex;
justify-content: center;`