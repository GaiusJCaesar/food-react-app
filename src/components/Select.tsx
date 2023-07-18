import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';
import {db} from '../services/firestore';
import { collection, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { DateToNiceString } from '../functions/functions';

interface SelectorProps {
    date: string;
}
const Select = ({date}: SelectorProps) => {

    const [mealsAvailable, setMealsAvailable] = useState<any[] | undefined>([]) 
    const [selectedValue, setSelectedValue] = useState<any>({})
    const [defaultValue, setDefaultValue] = useState<any>([])

    // const options = {value: 'sprout-linguine', label: 'Sprout Linguine'}

    useEffect(() => {
      onSnapshot(collection(db, "meals"), (snapshot) => {
        setMealsAvailable(snapshot.docs.map(doc => doc.data()))        
      });
    }, [])
    
    useEffect(() => {
        onSnapshot(doc(db, "plans", date), (doc) => {
            setDefaultValue(doc.data())
        })
    }, [date])

    const setMeal = async (payload: any) => {
        const docRef = doc(db, "plans", date);
        await setDoc(docRef, payload)
    }

    const handleChange = (selectedOption: any) => {
        setSelectedValue(selectedOption);
        setMeal(selectedOption);
    };

    return (
        <Container>
            <Header onClick={() => {}}>
                <Title>
                    {defaultValue ? defaultValue?.label : "Not Selected"}
                </Title>
                <Subtitle>
                    {DateToNiceString(date)}
                </Subtitle>
            </Header>
        </Container>
    )
}

export default Select;

const Container = styled.div`
margin: 10px;
background-color: #D9C5B2;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`
const Header = styled.div`
padding: 1px 15px 1px 15px;
background-color: #523D28`
const RSelect = styled(ReactSelect)`
padding: 20px 20px 20px 20px`;
const Title = styled.h3`
padding: 0px;
color: white`
const Subtitle = styled.h4`
padding: 0px;
color: #AAA49D`