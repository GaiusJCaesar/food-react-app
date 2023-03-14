import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import AddMeals from './pages/Meals/AddMeals';
import Meals from './pages/Meals/Meals';
import MealSelection from './pages/MealSelection/MealSelection';
import DateSelector from './pages/MealSelector/DateSelector';
import MealSelector from './pages/MealSelector/MealSelector';
// import { getMealByName, GetMeals, useMeals } from './services/firestore';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/date-selector" element={<DateSelector />} />
          <Route path="meals" element={<Meals />} />
          <Route path="add-meal" element={<AddMeals />} />
          <Route path="/meal-selector/:date" element={<MealSelector />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
