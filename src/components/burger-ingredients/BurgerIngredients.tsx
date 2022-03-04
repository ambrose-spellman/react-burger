import React from 'react';
import {Button, Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from "../IngredientList/IngredientList";
import classnames from "classnames";
import main from '../app/app.module.css'
import style from '././burger-ingredients.module.css'
// type BurgerIngredientsProps = {}
const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one')
  return (
      <div className={main.w_48} >
        <div className={classnames(main.flex, 'mb-5')}>
        
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
        <div className={style.tab_body}>
          <IngredientList name={'Булки'} type={'bun'}/>
          <IngredientList name={'Соусы'} type={'sauce'}/>
          <IngredientList name={'Начинки'} type={'main'}/>
        </div>
      </div>
  );
};

export default BurgerIngredients;