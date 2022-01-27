import React from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import Distance from "../Distance";
import './main.css';

const Main = () => {

  return (
    <div className="main container">
        <AppHeader/>
        <Distance w={null} h={10}/>
        <h2 className="title-lg">Соберите бургер</h2>
        <Distance w={null} h={5}/>
        <div className="row j-c-between">
          <BurgerIngredients/>
          <BurgerConstructor />
        </div>
    </div>
  );
}

export default Main;
