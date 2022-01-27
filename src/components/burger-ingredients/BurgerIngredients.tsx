import React from 'react';
import {Button, Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Distance from "../Distance";
import Ingredient from "../Ingredient/Ingredient";
import  './burger-ingredients.css';

// type BurgerIngredientsProps = {}
const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one')
  return (
      <div className="w-48" >
        <div className="flex">
        
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            <Button type="secondary" size="medium">Булки</Button>
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            <Button type="secondary" size="medium"> Соусы</Button>
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            <Button type="secondary" size="medium">  Начинки</Button>
          </Tab>
        </div>
        <Distance w={null} h={10}/>
        <div className="tab-body">
        
          <Ingredient name={'Булки'} type={'bun'}/>
          <Ingredient name={'Соусы'} type={'sauce'}/>
          <Ingredient name={'Начинки'} type={'main'}/>
        </div>
      </div>
  );
};

export default BurgerIngredients;