import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Selector from './components/Selector';
import TopNavigationBar from './components/TopNavigationBar';
import Home from './pages/home/Home';
import Layout from './pages/Layout/Layout';
import MealSelection from './pages/MealSelection/MealSelection';
// import { getMealByName, GetMeals, useMeals } from './services/firestore';

function App() {

  return (
    <div className="App">
      {/* <Button onClick={() => getMealByName("sprout-linguine")}>Meal button</Button>
      <Button onClick={() => getMealByName("greek-meatballs")}>Meal button</Button>
      <Button onClick={() => GetMeals()}>Meal button</Button>      */}
      {/* <MealSelection /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="meal-selection" element={<MealSelection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
const Title = styled.h1`
  color: green;
  `
const Button = styled.button``;

const Text = styled.p`` 