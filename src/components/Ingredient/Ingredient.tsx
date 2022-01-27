import React from 'react';
import Distance from "../Distance";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {data} from "../../utils/data";
import './ingredients.css'

type IngredientProps = {
  name: string
  type: string
}

const Ingredient  = ({ name, type }: IngredientProps) => {
  function useCounter(initialValue: number = 0) {
    const [value, setValue] = React.useState(initialValue);
    const increment = React.useCallback(
        () => setValue((v) => ( v + 1)),
        []
    );
    return [value, increment] as const;
  }
  const [counter, setCounter] = useCounter(0)
  const handleCounterClick = () => {
    setCounter()
  }
  return (
      <div className="ingredients">
        <Distance w={null} h={6}/>
        <h3 className="title-md">{name}</h3>
        <div className="row f-wrap">
          { data.filter((ingredient) =>ingredient.type === type).map((item: any, index) => {
            return (
              <div key={index} onClick={handleCounterClick} className="w-45 flex f-d-column f-a-center ingredient">
                  {item.calories < 1200 && (<Counter count={counter}/>)} {/*Временное условия чтобы видеть счетчики*/}
                  <img className="w-100" src={item.image_large} alt="neo burger"/>
                  <Distance w={null} h={1}/>
                  <p className="ingredient_price flex">
                    <span className="text text_type_digits-default">{item.price}</span>
                    <Distance w={3} h={3}/>
                    <CurrencyIcon type="primary" />
                  </p>
                  <Distance w={null} h={1}/>
                  <p className="text text_type_main-default">{item.name}</p>
                  <Distance w={null} h={6}/>
                <Distance w={null} h={10}/>
              </div>
            )
          })
        }
        </div>
    </div>
  );
};

export default Ingredient;