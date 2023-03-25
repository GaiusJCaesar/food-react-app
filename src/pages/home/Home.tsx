import React from 'react';
import styled from 'styled-components';
import DateSelector from '../MealSelector/DateSelector';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigation = (selector: string) => {
        switch (selector) {
            case 'date-selection':
                return navigate('/date-selector/')
            case 'notes':
                return navigate('/notes/')
        }
    }
    
    return (
        <div>
            <Title>Home</Title>
            <Header onClick={() => handleNavigation('date-selection')}>
                <Title2>Date Selection</Title2>
            </Header>
            <Header onClick={() => handleNavigation('notes')}>
                <Title2>Notes</Title2>
            </Header>
        </div>
    )
};

export default Home;

const Title = styled.h1`
display: flex;
justify-content: center;`

const Container = styled.div`
margin: 10px;
background-color: #D9C5B2;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`
const Header = styled.div`
padding: 1px 15px 1px 15px;
background-color: #523D28;
margin: 10px 0px;`
const Title2 = styled.h3`
padding: 0px;
color: white`
const Subtitle = styled.h4`
padding: 0px;
color: #AAA49D`