import React from 'react';
import styled from 'styled-components';
import DateSelector from '../MealSelector/DateSelector';

const Home = () => {

    return (
        <div>
            <Title>Home</Title>
            <DateSelector />
        </div>
    )
};

export default Home;

const Title = styled.h1`
display: flex;
justify-content: center;`