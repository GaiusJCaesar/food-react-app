import Meal from "../../components/Meal";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';
import {db} from '../../services/firestore';
import { collection, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const Meals = () => {
    const navigate = useNavigate();
    const [mealsAvailable, setMealsAvailable] = useState<any[] | undefined>([]) 
    const [dropdownEnabled, setDropdownEnabled] = useState<boolean>(false);

    useEffect(() => {
        onSnapshot(collection(db, "meals"), (snapshot) => {
          setMealsAvailable(snapshot.docs.map(doc => doc.data()))        
        });
    }, [])

    function handleAddMealClick() {
        navigate("/add-meal")
    }
    return (
        <div>
            <Title>Meals</Title>
            <AddMeal onClick={handleAddMealClick}>Add Meal</AddMeal>
            {mealsAvailable?.map(meal => (<Meal key={meal.value} data={meal ? meal : undefined} />))}
        </div>
    )
};

export default Meals;

const Title = styled.h1`
display: flex;
justify-content: center;`
const AddMeal = styled.h4`
display: flex;
justify-content: center;
color: green`