import React from 'react';
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import classnames from "classnames";
import style from './app.module.css';
const App = () => {

  return (
    <div className={classnames(style.container ,style.main)} >
        <AppHeader/>
        <h2 className={classnames(style.title_lg, "mt-10 mb-5")}>Соберите бургер</h2>
        <div className={classnames(style.row , style.j_c_between)}>
          <BurgerIngredients/>
          <BurgerConstructor />
        </div>
    </div>
  );
}

export default App;
